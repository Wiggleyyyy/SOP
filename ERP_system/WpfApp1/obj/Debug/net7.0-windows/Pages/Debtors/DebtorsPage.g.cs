﻿#pragma checksum "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "EC287D1B5B4C46CFF24E24C7F547E64855B66256"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using ERP_system.Pages.Debtors;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Controls.Ribbon;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace ERP_system.Pages.Debtors {
    
    
    /// <summary>
    /// DebtorsPage
    /// </summary>
    public partial class DebtorsPage : System.Windows.Controls.Page, System.Windows.Markup.IComponentConnector {
        
        
        #line 25 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button home_button;
        
        #line default
        #line hidden
        
        
        #line 27 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button view_button;
        
        #line default
        #line hidden
        
        
        #line 28 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button create_button;
        
        #line default
        #line hidden
        
        
        #line 29 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button edit_button;
        
        #line default
        #line hidden
        
        
        #line 30 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button delete_button;
        
        #line default
        #line hidden
        
        
        #line 34 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ListView debtors_listview;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "7.0.10.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/ERP_system;component/pages/debtors/debtorspage.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "7.0.10.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            this.home_button = ((System.Windows.Controls.Button)(target));
            
            #line 25 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
            this.home_button.Click += new System.Windows.RoutedEventHandler(this.home_button_Click);
            
            #line default
            #line hidden
            return;
            case 2:
            this.view_button = ((System.Windows.Controls.Button)(target));
            
            #line 27 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
            this.view_button.Click += new System.Windows.RoutedEventHandler(this.view_button_Click);
            
            #line default
            #line hidden
            return;
            case 3:
            this.create_button = ((System.Windows.Controls.Button)(target));
            
            #line 28 "..\..\..\..\..\Pages\Debtors\DebtorsPage.xaml"
            this.create_button.Click += new System.Windows.RoutedEventHandler(this.create_button_Click);
            
            #line default
            #line hidden
            return;
            case 4:
            this.edit_button = ((System.Windows.Controls.Button)(target));
            return;
            case 5:
            this.delete_button = ((System.Windows.Controls.Button)(target));
            return;
            case 6:
            this.debtors_listview = ((System.Windows.Controls.ListView)(target));
            return;
            }
            this._contentLoaded = true;
        }
    }
}

