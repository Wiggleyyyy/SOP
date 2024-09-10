"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Lager_table } from "@/components/LagerTable"; 
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input";
import { ButtonIcon } from "@radix-ui/react-icons";


export default function Home() {
  const { toast } = useToast();
  const router = useRouter();

  const [items, setItems] = useState([]); // Holds the data for the items table
  const [selectedItems, setSelectedItems] = useState([]); // Holds selected item IDs
  const [currentItem, setCurrentItem] = useState(null); // Holds the current item for editing

  // State variables for the input fields in the Drawer
  const [itemName, setItemName] = useState("");
  const [itemEAN, setItemEAN] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  // Fetch initial data and subscribe to real-time updates
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("../");
        return;
      }
    };

    const fetchItems = async () => {
      const { data, error } = await supabase
        .from("items") // Ensure 'items' is the correct table name
        .select("*"); // Fetch all columns

      if (error) {
        console.log(error);
        toast({
          title: "Error fetching items",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setItems(data || []); // Set the fetched items to state
      }
    };

    const subscribeToItemChanges = () => {
      const itemsChannel = supabase
        .channel("items-channel")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "items" },
          (payload) => {
            console.log("Item change received:", payload);
            const { eventType, new: newItem, old: oldItem } = payload;

            // Handle different event types
            if (eventType === "INSERT") {
              setItems((prevItems) => [newItem, ...prevItems]); // Add new item at the beginning
            } else if (eventType === "UPDATE") {
              setItems((prevItems) =>
                prevItems.map((item) =>
                  item.item_id === newItem.item_id ? newItem : item
                )
              ); // Update item in the list
            } else if (eventType === "DELETE") {
              setItems((prevItems) =>
                prevItems.filter((item) => item.item_id !== oldItem.item_id)
              ); // Remove deleted item
            }
          }
        )
        .subscribe();

      return () => supabase.removeChannel(itemsChannel); // Clean up the subscription
    };

    checkSession();
    fetchItems(); // Fetch data from Supabase

    const unsubscribe = subscribeToItemChanges(); // Subscribe to real-time updates

    return () => {
      unsubscribe(); // Clean up subscription on component unmount
    };
  }, [router, toast]);

  // Handle selecting and deselecting items
  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter((id) => id !== itemId);
      } else {
        return [itemId]; // Only allow one item to be selected for editing at a time
      }
    });
  };

  // Function to populate fields for editing when the drawer is opened
  const openEditDrawer = () => {
    const selectedItem = items.find((item) => item.item_id === selectedItems[0]);
    if (selectedItem) {
      setItemName(selectedItem.item_name);
      setItemEAN(selectedItem.item_ean);
      setItemPrice(selectedItem.item_price);
      setItemQuantity(selectedItem.item_qty);
      setCurrentItem(selectedItem);
    }
  };

  // Handle updating the selected item
  const handleUpdateItem = async () => {
    if (!itemName || !itemEAN || !itemPrice || !itemQuantity) {
      toast({
        title: "Missing fields",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
      return;
    }

    if (isNaN(itemEAN) || isNaN(itemPrice) || isNaN(itemQuantity)) {
      toast({
        title: "Invalid input",
        description: "EAN, Price, and Quantity must be valid numbers.",
        variant: "destructive",
      });
      return;
    }

    const { data, error } = await supabase
      .from("items") // Ensure the correct table name
      .update({
        item_name: itemName,
        item_ean: itemEAN,
        item_price: itemPrice,
        item_qty: itemQuantity,
      })
      .eq("item_id", currentItem.item_id); // Update based on the selected item's ID

    if (error) {
      toast({
        title: "Error updating item",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Item updated",
        description: `Item "${itemName}" has been successfully updated.`,
      });
      setSelectedItems([]); // Clear selection after update
      setCurrentItem(null); // Clear current item
    }
  };

  const handleCreateItem = async () => {
    if (!itemName || !itemEAN || !itemPrice || !itemQuantity) {
      toast({
        title: "Missing fields",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
      return;
    }

    const { data, error } = await supabase
      .from("items") // Ensure the correct table name
      .insert([{ item_name: itemName, item_ean: itemEAN, item_price: itemPrice, item_qty: itemQuantity }]);

    if (error) {
      toast({
        title: "Error creating item",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Item created",
        description: `Item "${itemName}" has been successfully created.`,
      });
      // Clear the form fields after creation
      setItemName("");
      setItemEAN("");
      setItemPrice("");
      setItemQuantity("");
    }
  };

  const deleteSelected = async () => {
    if (selectedItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to delete.",
        variant: "destructive",
      });
      return;
    }

    // Deleting items in Supabase based on selected IDs
    const { data, error } = await supabase
      .from("items") // Ensure 'items' is the correct table name
      .delete()
      .in("item_id", selectedItems); // Pass an array of selected item IDs

    if (error) {
      toast({
        title: "Error deleting items",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Items deleted",
        description: `Successfully deleted items with IDs: ${selectedItems.join(", ")}`,
      });
      // Remove deleted items from the state
      setItems((prevItems) => prevItems.filter((item) => !selectedItems.includes(item.item_id)));
      setSelectedItems([]); // Clear selection after deletion
    }
  };

  const LogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error logging out.",
        variant: "destructive",
        description: error.message,
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been logged out.",
      });
      router.push("../");
    }
  };

  return (
    <main className="flex flex-row">
      <div className="h-screen w-[30vh] bg-muted flex flex-col items-center p-5">
        <Label className="text-2xl">Lager</Label>
        <Separator className="mt-5 h-1 bg-accent-foreground rounded" />
        <div className="flex flex-col items-center">
          <Link href="">
            <Button
              className="w-52 mt-5 rounded"
              onClick={() =>
                toast({
                  title: "Error 404",
                  description: "Page was either not found or doesn't exist",
                  variant: "destructive",
                })
              }
            >
              Home
            </Button>
          </Link>
          <Link href="">
            <Button
              className="w-52 rounded mt-5"
              variant="outline"
              onClick={() =>
                toast({
                  title: "Error 404",
                  description: "Page was either not found or doesn't exist",
                  variant: "destructive",
                })
              }
            >
              Orders
            </Button>
          </Link>
          <Link href="">
            <Button
              className="w-52 rounded mt-5"
              variant="outline"
              onClick={() => 
                toast({
                  title: "Already open.",
                  variant:"destructive"
                })
              }
            >
              Items
            </Button>
          </Link>
          <Link href="">
            <Button
              className="w-52 rounded mt-5"
              variant="outline"
              onClick={() =>
                toast({
                  title: "Error 404",
                  description: "Page was either not found or doesn't exist",
                  variant: "destructive",
                })
              }
            >
              Customers
            </Button>
          </Link>
        </div>
        <Button variant="destructive" className="w-52 rounded mt-5" onClick={LogOut}>
          Log out
        </Button>
      </div>
      <div className="flex flex-col">
        <div className="h-[12vh] w-[178dvh] bg-card flex flex-row items-center p-5">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button className="rounded w-20 mx-2">Create</Button>
                </DrawerTrigger>
                <DrawerContent className="flex items-center">
                  <DrawerHeader>
                    <DrawerTitle>Create new item</DrawerTitle>
                    <DrawerDescription>Fill out fields and submit item.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter className="flex flex-col items-center">
                    <div className="flex flex-row m-1">
                      <div className="flex flex-col">
                        <Label className="m-2">Name</Label>
                        <Input className="m-2" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                      </div>
                      <div className="flex flex-col m-1">
                        <Label className="m-2">EAN</Label>
                        <Input className="m-2" value={itemEAN} onChange={(e) => setItemEAN(e.target.value)} />
                      </div>
                      <div className="flex flex-col m-1">
                        <Label className="m-2">Price</Label>
                        <Input className="m-2" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                      </div>
                      <div className="flex flex-col m-1">
                        <Label className="m-2">Quantity</Label>
                        <Input className="m-2" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} />
                      </div>
                    </div>
                    <Button className="rounded w-52 m-5" onClick={handleCreateItem}>Create</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    className="rounded w-20 mx-2"
                    variant="secondary"
                    disabled={selectedItems.length !== 1} // Disable if no or multiple items selected
                    onClick={openEditDrawer} // Open the drawer and populate fields
                  >
                    Edit
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="flex items-center">
                  <DrawerHeader>
                    <DrawerTitle>Update item</DrawerTitle>
                    <DrawerDescription>Fill out fields and submit changes.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter className="flex flex-col items-center">
                    <div className="flex flex-row m-1">
                      <div className="flex flex-col">
                        <Label className="m-2">Name</Label>
                        <Input className="m-2" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                      </div>
                      <div className="flex flex-col m-1">
                        <Label className="m-2">EAN</Label>
                        <Input className="m-2" value={itemEAN} onChange={(e) => setItemEAN(e.target.value)} />
                      </div>
                      <div className="flex flex-col m-1">
                        <Label className="m-2">Price</Label>
                        <Input className="m-2" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                      </div>
                      <div className="flex flex-col m-1">
                        <Label className="m-2">Quantity</Label>
                        <Input className="m-2" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} />
                      </div>
                    </div>
                    <Button className="rounded w-52 m-5" onClick={handleUpdateItem}>Update</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="rounded w-20 mx-2" variant="destructive">
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to delete this?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Deleting an item is irreversible and cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="rounded">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="rounded" onClick={deleteSelected}>
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <Label className="mt-2.5">Actions</Label>
          </div>
          <Separator orientation="vertical" className="w-1 rounded bg-secondary mx-2" />
        </div>
        <div className="w-[175dvh] h-[88dvh]">
          {/* Pass the data and selection handler to Lager_table */}
          <Lager_table items={items} onSelectItem={handleSelectItem} selectedItems={selectedItems} />
        </div>
      </div>
    </main>
  );
}
