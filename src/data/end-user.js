import React from 'react';

export const course = {
    title: 'end-user',
    exercises: [
        {
            name: 'Logging On & Board Environment',
            objective: 'Authenticate your end user credentials and familiarise yourself with the environment',
            tasks: [
                {
                    instructionJsx: <p>Open Board in the browser to view the login screen. Enter the <em>username</em> <code>LiteUser</code> and the <em>password</em> is the same as that used to access the training environment.</p>
                },
                {
                    instructionJsx: <p>You will begin in the <em>Capsules</em> environment and will see all capsules and <em>folders</em> that you have been given access to. Click on the folder <code>4. End User</code> to show the capsules within.</p>
                },
                {
                    instructionJsx: <p>You have been told that you will need to regularly access the capsule <code>Sales Reporting</code>. Click on the hamburger menu on the capsule tile and click on the star icon to add this capsule to your <em>favourites</em>.</p>
                },
                {
                    instructionJsx: <p>Click on the blue 'b' icon in the top-left of the screen. Move to <em>favourites</em> to view all capsules marked as a favourite. Click on the hamburger menu for Sales Reporting again and click the + icon. This will expand the tile, making it more prominent in the menu and showing additional data, if configured. It can be expanded up to two times.</p>
                },
                {
                    instructionJsx: <p>Click on the Sales Reporting capsule tile itself to open the <em>home screen</em> of the capsule. Return to the capsules main menu by clicking the blue 'b' again and selecting <em>capsules</em></p>
                },
                {
                    instructionJsx: 
                        <div>
                            <p>Click on the icon with the letters 'LI' in the top-right to access the <em>user</em> menu. Click on <em>my profile</em> to enter some details for your user. You can set an avatar by entering the address of an <em>image</em>. Copy one of the below links for a Star Wars character, or link to your own image:</p>
                            <ul>
                                <li><a href="https://img.icons8.com/color/96/000000/luke-skywalker.png" target="_blank" rel="noopener noreferrer">Luke Skywalker icon by Icons8</a></li>
                                <li><a href="https://img.icons8.com/color/96/000000/darth-vader.png" target="_blank" rel="noopener noreferrer">Darth Vader icon by Icons8</a></li>
                                <li><a href="https://img.icons8.com/color/96/000000/c-3po.png" target="_blank" rel="noopener noreferrer">C-3PO icon by Icons8</a></li>
                            </ul>
                            <p>Enter your <em>email address</em> and <em>display name</em> and click <em>update profile</em>. You may change your <em>password</em> from here as well. Once finished, <em>sign out</em> from the user menu and sign back in again to see your new avatar.</p>
                        </div>
                }
            ]
        },
        {
            name: 'Capsule Navigation',
            objective: 'Learn how to navigate the screens and menus contained within a capsule',
            tasks: [
                {
                    instructionJsx: <p>As seen in the previous exercise, clicking on a capsule tile opens the <em>home screen</em> of the capsule. You can also go straight to a specific screen. Click on the hamburger menu on the Sales Reporting capsule tile and click the <em>show screen list</em> icon. Choose a screen from the list to be taken straight there.</p>
                },
                {
                    instructionJsx: <p>Once in a screen, the screen list can be opened again from the hamburger menu in the top-right corner of the screen. It can also be opened by hovering your mouse on the very left-hand side of the screen. Click on another screen in this menu to move to it.</p>,
                    infoJsx: <p>It may be the case that the screen list has been disabled for a particular capsule. This is usually because the designer wants to provide a more guided navigation between screens in the capsule.</p>
                },
                {
                    instructionJsx: <p>Click on the home icon in the top-right corner to return to the capsule home screen</p>
                },
                {
                    instructionJsx: <p>The home screen is the entry point to an particular capsule or application. There are two <em>gauges</em> on this screen displaying high-level sales metrics. On opening the screen, the latest data was retrieved from the Board data model. This data can be refreshed at any time - from the hamburger menu in the top-right, click on <em>refresh screen</em> to retrieve the latest data once more.</p>,
                    infoJsx: <p>In this training environment the data won't have changed but in a fast-moving data model this can be useful to ensure you're looking at the most up-to-date data</p>
                },
                {
                    instructionJsx: <p>The home screen contains some icons to guide you to the main dashboard screens in this capsule. Hover the mouse over each icon to reveal a <em>tooltip</em> with the name of each one. Click one to be taken directly to the dashboard.</p>,
                    infoJsx: <p>This is one way the designer may wish to guide you around the capsule, instead of allowing you to choose from the screen list. It may also be that certain checks or action are being performed behind the scenes, for example whether you are allowed access to the screen or whether access is allowed at this point in time.</p>
                },
                {
                    instructionJsx: <p>Near the top of the dashboard screen, there is a more prominent menu object to allow you to quickly move to other screens in the capsule. Click on one of them to be taken straight there.</p>,
                    infoJsx: <p>These menus are often configured by the designer to allow you to quickly move between similar or related screens</p>
                }
            ]
        },
        {
            name: 'Selectors',
            objective: 'Use this interactive object to apply filters or selections on the data to slice & dice the information you are seeing',
            tasks: [
                {
                    instructionJsx: <p>Open the screen <code>Product Group (Sidebar)</code>. This will display a few visualizations of the company's sales broken down by Product Group. Familiarize yourself with the information being displayed.</p>
                },
                {
                    instructionJsx: <p>In the top-right of the screen is a <em>calendar</em> object, which allows you to set the date range for the information being displayed. The screen designer has set this to default to the current year-to-date (based on available data). Click on the range to amend the start and end dates. Note that the information on screen will immediately refresh using the new dates.</p>
                },
                {
                    instructionJsx: <p>Click the refresh icon on the calendar object to reset the dates back to the default current year-to-date</p>
                },
                {
                    instructionJsx: <p>On the left-hand side of the screen, the designer has placed some <em>selector</em> objects to allow you to easily filter the information geographically. First click on the <code>Continent</code> selector - this is known as a <em>pop-up selector</em>. A window will appear, displaying the available Continents to select. Click on one of them to select it and click <em>apply</em>. Note that all of the information on screen immediately refreshes and you should now see updated information for the chosen Continent.</p>,
                    infoJsx: <p>Below the Continent selector, you will see the <code>Customer Country</code> selector - this is know as a <em>vertical selector</em>, which shows the available entity members directly on screen. Note that because Continent and Customer Country are <em>related entities</em> some countries will be shown in a different colour, denoting whether they are currently <em>active</em> or <em>inactive</em> based on the Continent selected.</p>
                },
                {
                    instructionJsx: <p>On the Customer Country selector, click on the name of a single country to select it. You can also click the checkbox next to the member name. Again the screen will refresh with the new selection applied.</p>
                },
                {
                    instructionJsx: <p>At the very top of the Customer Country selector, click on the <em>reset selection</em> icon. This will reset this particular selector back to its default selection. The inherited selection from Continent will be retained.</p>,
                    infoJsx: <p>Note that in this case the default on the Customer Country selector is that no selection is applied on this entity. If the screen designer has applied a default selection, the reset action will reset the selection to that default.</p>
                },
                {
                    instructionJsx: <p>Try selecting several countries from the selector. Note that when you click on a country, there is a short delay until the selection is made and the screen refreshes. During this delay, you can add more members to the selection by clicking on them. Click on the <em>pause</em> icon that appears in the top-right of the selector during the delay to prevent the refresh until you are ready. Add or remove countries until you are happy with the selection, then click the <em>play</em> icon to refresh the screen.</p>,
                    infoJsx: <p>Instead of clicking the member name or checkbox, clicking the icon with a tick in a dotted circle that appears next to each member will automatically pause the selection being applied</p>
                },
                {
                    instructionJsx: <p>If a selection has been made on a particular entity (as opposed to inherited), clicking on an inactive member will add it to the existing selection. Clicking on an active member will remove it from the existing selection. Change the selection on Customer Country by adding and removing members from the selection made in the previous step.</p>,
                    infoJsx: <p>You can tell a selection has been made directly on an entity by the presence of check marks next to the selected members' names</p>
                },
                {
                    instructionJsx: <p>If a selection has been applied to an entity, you can quickly change the selection to a different member without having to deselect the ones already selected. Click on the <em>bullseye</em> icon that appears next to the member name you would like to select and this will immediately select this member and deselect all others.</p>
                },
                {
                    instructionJsx: <p>You can temporarily change the behaviours of the vertical selector by hovering on the three dots in the top-right of the object. This will open a menu with some advanced settings. Try setting <em>selection mode</em> to <code>exclude</code> to have the members you click excluded from the selection and all others selected instead. Try setting <em>show active members</em> to <code>at their position</code> to keep them in order rather than grouping active members together at the top. Finally try setting <em>show entity</em> to <code>code & description</code> to display the country ISO codes alongside their names.</p>
                },
                {
                    instructionJsx: <p>You have been asked to find out the total <code>Net Sales</code> value for <code>Seafood</code> during 2021 year-to-date (1st Jan-12th June) in the main anglophone countries of <code>UK, Ireland, USA and Canada</code>. Use the selectors on the left-hand side of the screen to discover this information and enter it below.</p>,
                    inputCaption: 'Enter Net Sales',
                    answer: 2880
                },
                {
                    instructionJsx: <p>You have also been asked for the total <code>Margin</code> during the twelve months from 1st June 2020 to 31st May 2021 for the <code>Everyday Products</code> division in the EU countries, which is all the countries belonging to <code>Europe</code> except <code>Switzerland, Norway and UK</code></p>,
                    hintJsx: <p>Instead of selecting all of the EU countries one by one, use the <em>exclude selection mode</em> on the Customer Country selector to exclude the non-EU European countries first. Then select Europe on the Continent selector.</p>,
                    inputCaption: 'Enter Margin',
                    answer: 81360
                }
            ]
        },
        {
            name: 'Selection Editor',
            objective: 'Examine and edit the full selection being applied to the information on screen',
            tasks: [
                {
                    instructionJsx: <p>In the capsule menu bar at the top of the browser, click on the <em>select</em> icon to open the <em>selection editor</em>. This will allow you to inspect and edit all of the entity selections that are currently applied to the screen. A tick next to the entity name indicates a selection has been made directly on that entity. Note where the selections are currently applied.</p>,
                    infoJsx: <p>The selection editor will always display the current selection, including any that you have made using selector or calendar objects. Opening the selection editor immediately after opening the screen will show you the default selection that the designer has applied, if any.</p>
                },
                {
                    instructionsJsx: <p>Click on the <em>reset all</em> button. This will remove all selections, effectively showing you all available data. Click <em>apply</em> and the screen will refresh with no filters, showing data for all time and all territories. Note that the selector and calendar objects also update to reflect this.</p>,
                    infoJsx: <p>Editing the selection is temporary. Once you leave the screen by closing the browser or navigating to a different screen, the selection will revert to the screen default when you return. Later we will look at how selections can be saved.</p>
                },
                {
                    instructionJsx: <p>Open the selection editor again. Clicking on the name of an entity will allow you to apply a selection to it. Find and click <code>Customer</code> to view all available customers in this data model. Select any 5 customers and click <em>apply</em>. Note the <em>active</em> counter now displays how many entity <em>members</em> are currently selected out of the total available. This applies to related entities in the Branch <em>hierarchy</em> where a selection is inherited from the selection on customer. Click on <code>Customer City</code> to view the cities that are implicitly selected from the Customer selection. Close this and click apply again to apply the Customer selection to the data. Note that the Customer Country selector should also show the active members from this implicit selection.</p>,
                    infoJsx: <p>It's important to be aware that an implicit selection does not necessarily mean those members are selected in their entirety. In this case we know that we're only viewing data for 5 customers, not all of the countries shown as active on the selector.</p>
                },
                {
                    instructionJsx: <p>Open the selection editor once more. Hover over the Customer Country entity and some icons will appear on the right-hand side of the window. The target icon will allow you to switch the selection <em>focus</em> to that entity. Click on it for Customer Country. You will see the tick denoting the applied selection moving from Customer to Customer Country. Click on Customer Country to see that the same countries as before are selected but note that the active count for Customer has increased. The selection is now applied to Customer Country and the implicit selection is on all Customers that belong to the country in the data model hierarchy. Click <em>apply</em> to see how this affects the data shown.</p>
                },
                {
                    instructionJsx: <p>In the selection editor, hover over Customer Country again. Because it has an applied selection now, a <em>reset</em> icon will appear. Click it to remove the selection on that particular entity but preserve any other selections made.</p>,
                    infoJsx: <p>The reset commands in the selection editor behave differently to those on selector objects. In the selection editor, reset will always remove the selection entirely. In a selector, it will reset the selection back to the screen default.</p>
                },
                {
                    instructionJsx: <p>You've been asked to find out which Product Group had the highest <code>Sales Volume</code> delivered by the <code>United Package</code> shipper in 2020</p>,
                    inputCaption: 'Enter Product Group',
                    answer: 'beverages'
                },
                {
                    instructionJsx: <p>You've also been asked to obtain the <code>Avg Price</code> during 2021 for all Product Groups and all Shippers but please exclude sales in the cities of <code>Brandenburg, Cork and Paris</code> as they have unusually high values</p>,
                    hintJsx: <p>If you have a long list of entity members, you can type in the <em>search bar</em> in the top-right of the window to easily find a particular one. You can perform an <em>exclude</em> selection by clicking that button instead of apply after clicking the members to exclude.</p>,
                    inputCaption: 'Enter Avg Price',
                    answer: 27.33
                }
            ]
        },
        {
            name: 'Drilling',
            objective: 'Learn how to drill into the information to move from summary to detail in a few clicks',
            tasks: [
                {
                    instructionJsx: <p>Using the menu object or the screen list, move to the <code>Geographical</code> dashboard. This will display similar visualizations but with a focus on a geographical breakdown of the sales instead of product.</p>
                },
                {
                    instructionJsx: <p>The <em>data view</em> object is the rows and columns report showing a tabular view of various measures, broken down by country and grouped by continent. The designer has configured a <em>drill</em> to show more information about a particular country. To run the drill, double-click on the name of a country. This will produce a modal window with the same information but at the next level of detail, in this case Customer City.</p>,
                    infoJsx: <p>You can also drill on a sub-total (continent here) or grand total by double-clicking on those rows</p>
                },
                {
                    instructionJsx: <p>Drill paths can go through multiple levels of the data structures. From the modal window with the information by city, double-click on the name of a city to drill further, to see more detailed information about that city. This will produce a second modal, this time with a breakdown by Customer.</p>
                },
                {
                    instructionJsx: <p>At this level, the designer has not specified any more drill paths. Double-click on the name of a customer. This will present you with a choice of where to drill next, with all entities shown that are relevant to this particular set of information. Choose an entity and click <em>ok</em> to produce another modal with the desired detail.</p>
                },
                {
                    instructionJsx: <p>Click on the <em>x</em> in the top-right of the modal window to close it and return the previous drill level. Close all three levels to return to the main screen.</p>,
                },
                {
                    instructionJsx: <p>You've been asked to find out which is the top customer in terms of <code>Net Sales</code> from the city of <code>London</code> during 2021</p>,
                    hintJsx: <p>Click on a column header to sort the data by the values in that column</p>,
                    inputCaption: 'Enter Customer',
                    answer: 'Eastern Connection'
                },
                {
                    instructionJsx: <p>You can change a drill path that has already been configured. Single-click on a country name on the data view to select it. At the top of the data view some context icons will appear. The <em>drill down</em> icon will execute the configured drill, same as double-clicking. Instead, click the <em>drill anywhere</em> icon to change the drill path. Choose <code>Product Group</code> and click ok.</p>
                },
                {
                    instructionJsx: <p>Close the drill window and double-click a different country. Note that your new path to Product Group is retained.</p>,
                    infoJsx: <p>As with changes to selection, changes to the drill path are also temporary. If you leave the screen, the drills will revert to how they were configured by the designer.</p>
                },
                {
                    instructionJsx: <p>You can drill on most Board objects that display information. The object in the top-left of the screen is called a <em>treemap</em>, visualizing the distribution of sales across the countries. Click on one of the country boxes to select it and the familiar context icons will appear at the top. Click <em>drill anywhere</em> and select a drill path. Try doing the same on the bar chart below, where you can drill into a particular continent.</p>,
                    infoJsx: <p>Drilling always displays the information in a tabular view, regardless of the object being drilled from.</p>
                },
                {
                    instructionJsx: <p>You've been asked to find out which is the most popular <code>Confections</code> product in <code>USA</code> during 2021</p>,
                    inputCaption: 'Enter Product',
                    answer: 'Tarte au sucre'
                },
                {
                    instructionJsx: <p>The designer may also have configured some more advanced drills on some objects. Move back to the <code>Product Group</code> screen. Double-click on a Product Group from the data view. This will open a new screen in a separate browser tab - this is known as a <em>drill to screen</em>. In this case, the screen has a similar dashboard but configured at the Product level of detail. Note that the Product Group that you drilled on has been applied to the screen as a <em>selection</em>. Open the select editor to verify this. Close the browser tab to return to the Product Group screen.</p>,
                    infoJsx: <p>The designer may also have configured drills that perform specific actions, such as calculating some data. Note that where an advanced drill has been configured, it may not be possible to change the drill action using the <em>drill anywhere</em> command.</p>
                }
            ]
        },
        {
            name: 'Interacting with the Data View',
            objective: 'Explore the different ways that you can interact with the data view object to display the information just as you would like',
            tasks: [
                {
                    instructionJsx: <p>Return to the Geographical screen. Note that the data view on this screen shows information by Customer Country, grouped by Continent. Click on a continent <em>header</em> to collapse that group. Click on it again to expand. Click on the hamburger menu icon at the top-left of the data view. The <em>+</em> and <em>-</em> icons will expand or collapse all groups at once.</p>,
                    infoJsx: <p>This can be useful on data views with lots of detail, to quickly show you a more summarized view.</p>
                },
                {
                    instructionJsx: <p>Expand all of the groups again. Click on the column header for <code>Net Sales</code> - this will sort the rows in descending according to the data in that column. Click the header again to reverse the sort order to ascending.</p>,
                    infoJsx: <p>On data views with groups, like the Continent groups here, both the groups themselves are sorted according to the group subtotal, as well as the individual items within the groups.</p>
                },
                {
                    instructionJsx: <p>Single-click on the name of a country, which will select the cell like on a spreadsheet. Note the context menu shows the options relevant to this selection - the <em>drill</em> functions as well as a <em>select</em> function. Select several countries by dragging the mouse over a range or using ctrl+click to add them individually. Click the select icon to apply the selected countries to the <em>screen selection</em>. All information on screen, including the graphical objects, will refresh with this selection applied. Click the <em>reset</em> icon that appears in the data view context menu to remove it again.</p>,
                    infoJsx: <p>This feature can be useful if there is no selector on screen for the particular entity you would like to select on. It can also be used on the subtotal rows, to select a grouping entity member.</p>
                },
                {
                    instructionJsx: <p>Move to the screen <code>Sales Person</code>. The data view on this dashboard is much more detailed as it displays the measures broken down by Branch. Click the data view hamburger menu and click the <em>search</em> icon. This will allow you to perform a text search within the data view. Enter the search term <code>deli</code> to find all customers who are a delicatessen.</p>,
                    infoJsx: <p>The search is performed in all columns of the data view, not only the row headers, so this can be very useful for searching within text data.</p>
                }
            ]
        }
    ]
};