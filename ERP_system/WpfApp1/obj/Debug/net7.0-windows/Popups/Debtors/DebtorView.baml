   M S B A M L   `   `   `  ����E  AERP_system, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullE'clr-namespace:ERP_system.Popups.DebtorsERP_system.Popups.Debtors  5   	   *    $ERP_system.Popups.Debtors.DebtorView   5   	   W SPresentationCore, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   9local'clr-namespace:ERP_system.Popups.Debtors     5   	     � Title$  ERP system | Debtor view��5   	   $	��700��6*   $
��1300��67   .��5	      �  � RowDefinitions 5
   
   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   .+�5   
   �� -   5         ��Name$ title��5   !   $��0��6   $
��View��60   $��Center=�6<   $��Center=�6W   $��20(�6t   �� 5   
   $��1��6   .+�5      �� -   5         ��Name$ 
info_title��5      $
��Info��6(   $��Center=�67   �� 5      -   5         ��Name$ info_listview��5      $��Center=�6.    �� View 5      �� 5      .P�5      �� $��	Debtor ID��6)    �� Width$ 75��6<    �� DisplayMemberBinding 6G   �� *id+�� 5      $
��Name��6)   $	 100��67    6C   �� *name+�� 5      $��
Company ID��6)   $ 75��6=    6H   �� *
company_id+�� 5      $	��CVR��6)   $	 100��66    6B   �� *cvr+�� 5      $	��VAT��6)   $	 100��66    6B   �� *vat+�� 5      $��phone��6)   $	 100��68    6D   �� *phone+�� 5      $��email��6)   $	 100��68    6D   �� *email+�� 5       $��
Country ID��6)   $ 75��6=    6H   �� *
country_id+�� 5!      $��Contact person��6)   $	 100��6A    6M   �� *contact_person+�� 5"      $��Zipcode��6)   $ 75��6:    6E   �� *	zipcode+�� 5#      $
��City��6)   $	 100��67    6C   �� *city+�� 5$      $��Date created��6)   $	 100��6?    6K   �� *date_created+�� 5%      $
��Note��6)   $	 150��67    6C   �� *debtor_note+5&      5(      5)      �� 5+   
   $��2��6   .+�5,      �� -   5        $ delivery_title��5,      $��Delivery info��6,   $��Center=�6D   �� 5-      -   5        $ delivery_listview��5-      $��Center=�62    5.      �� 5/      .P�50      �� $��Delivery phone��6)   $	 100��6A    6M   �� *delivery_phone+�� 51      $��Delivery email��6)   $	 100��6A    6M   �� *delivery_email+�� 52      $��Delivery country ID��6)   $	 125��6F    6R   �� *delivery_country_id+�� 53      $��Delivery zipcode��6)   $	 100��6C    6O   �� *delivery_zipcode+�� 54      $��Delivery city��6)   $	 100��6@    6L   �� *delivery_city+�� 55      $��Delivery address��6)   $	 100��6C    6O   �� *delivery_address+56      58      59      �� 5;   
   $��3��6   .+�5<      �� -   5        $ billing_title��5<      $��billing info��6+   $��Center=�6B   �� 5=      -   5        $ billing_listview��5=      $��Center=�61    5>      �� 5?      .P�5@      �� $��Billing address��6)   $	 100��6B    6N   �� *billing_address+�� 5A      $��Billing contact��6)   $	 100��6B    6N   �� *billing_contact+�� 5B      $��Billing term ID��6)   $	 100��6B    6N   �� *billing_term_id+5C      5E      5F      �� 5H   
   $��4��6    �� Orientation$ 
Horizontal=�6"   $��Center=�6;   $��0,50,0,0q�6X   .+�5I      �� $��Center=�6   $��0,0,5,0q�66   .+�5J      �� $��Country��6   $��Center=�6*   �� 5K      -   5        $ country_listview��5K      $��Center=�65    5L      �� 5M      .P�5N      �� $��ID��6-   $ 50��69    6D   �� *id+�� 5O      $��Country��6-   $	 100��6>    6J   �� *	country+�� 5P      $��ISO code��6-   $ 75��6?    6J   �� *
iso_code+5Q      5S      5T      �� 5U      $��Center=�6   $��5,0,5,0q�66   .+�5V      �� $��Delivery country��6   $��Center=�63   �� 5W      -	   5        $ deliveryCountry_listview��5W      $��Center=�6=    5X      �� 5Y      .P�5Z      �� $��ID��6-   $ 50��69    6D   �� *id+�� 5[      $��Country��6-   $	 100��6>    6J   �� *	country+�� 5\      $��ISO code��6-   $ 75��6?    6J   �� *
iso_code+5]      5_      5`      �� 5a      $��Center=�6   $��5,0,0,0q�66   .+�5b      �� $��Billing term��6   $��Center=�6/   �� 5c      -
   5        $ billingTerm_listview��5c      $��Center=�69    5d      �� 5e      .P�5f      �� $��ID��6-   $ 50��69    6D   �� *id+�� 5g      $
��Term��6-   $	 100��6;    6G   �� *name+5h      5j      5k      5l      5m      5n      