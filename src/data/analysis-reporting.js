import React from 'react';

export const course = {
    title: 'analysis-reporting',
    exercises: [
        {
            name: 'Data View Basics',
            objective: 'Create a new capsule and understand the basics of the most important Board object, the Data View. Query data from the Northwind data model to create a basic report.',
            tasks: [
                {
                    instructionJsx: <p>In the <code>2. Reporting & Analysis</code> folder, create a new <em>capsule</em> called <code>Sales Reporting</code>. Ensure the <em>linked data model</em> is <code>Northwind</code>.</p>,
                    hintJsx: <p>You must switch to <em>design</em> mode to create a capsule by clicking the set square icon in the top-right</p>,
                    infoJsx: <p>The linked data model sets the default to be used in the capsule but other data models can also be referenced</p>   
                },
                {
                    instructionJsx: <p>In the new capsule from the left-hand vertical menu, create a new <em>screen</em> named <code>Data View Basics</code></p>
                },
                {
                    instructionJsx: <p>Navigate to the the <em>toolbox</em>, which is the second tab on the left-hand vertical menu. Drag a <em>data view</em> object from there and drop it on to the blank workspace.</p>
                },
                {
                    instructionJsx: <p>Open the <em>layout</em> of the data view, configure it with the Net Sales <em>data</em>, showing <em>entities</em> Continent on the <em>row axis</em> and Year on the <em>column axis</em></p>,
                    hintJsx: <p>Drag items from <em>data</em> and <em>entities</em> on the left-hand layout menu to the relevant areas of the configurator</p>
                },
                {
                    instructionJsx: <p>In <em>axis settings</em>, disable <em>show all</em> on the column axis to hide the years that have no data</p>
                },
                {
                    instructionJsx: <p>Save the layout and resize the data view object to fit the data, increasing <em>column widths</em> where necessary</p>,
                    hintJsx: <p>Column widths can be sized by dragging on the data view header, or more accurately by specifying the width in the <em>columns</em> menu on the right-hand panel</p>,
                    infoJsx: <p>Scroll bars will automatically be applied to an object where the data doesn't fit the available area allocated to the object</p>
                },
                {
                    instructionJsx: <p>Double-click on any of the row labels and set up a <em>drill down</em> to Customer Country</p>,
                    hintJsx: <p>You can also single-click on a row label and choose <em>drill down</em> from the object context menu</p>
                },
                {
                    instructionJsx: <p>Save the screen, switch to <em>play mode</em> and interact with the report. Double-click on a row label to drill into a particular Continent.</p>,
                    infoJsx: <p>Configurations (such as setting a drill path) made in <em>design mode</em> will be saved into the screen, meaning anyone accessing the screen will also have them applied. Configurations made in play mode are only temporary - the screen will revert to the saved configuration the next time it is accessed. For a developer or power user, this can be useful to test a configuration without losing the previous one.
                    </p>
                }
            ]
        },
        {
            name: 'Grouping Entities',
            objective: 'Explore how related entities interact with each other in a data view.',
            tasks: [
                {
                    instructionJsx: <p><em>Copy</em> the data view from the previous exercise and <em>paste</em> it below on the same screen</p>,
                    hintJsx: <p>Copy and paste controls can be found in the menu bar at the top of the screen or using keyboard shortcuts Ctrl+C and Ctrl+V</p>
                },
                {
                    instructionJsx: <p>Edit the layout of the pasted data view. Add the entity Customer Country to the <em>row axis</em> so that it becomes nested</p>,
                    hintJsx: <p>To access the layout, ensure the data view is selected (border will be highlighted in blue) then click the configure layout icon from the context menu in the top-left of the object or the controls in the menu bar at the top of the screen</p>,
                    infoJsx: <p>Where entities on an axis are related, the more summarized entity will automatically be used to group the more detailed one</p>
                },
                {
                    instructionJsx: <p>In the layout <em>data view settings</em>, set the nested groups to be <em>collapsed</em> by default</p>
                },
                {
                    instructionJsx: <p>Add Product Division to the <em>column axis</em>, so it appears above Year</p>,
                    infoJsx: <p>Where entities on an axis are unrelated, the order of them can be changed to decide which one is the grouping entity</p>
                },
                {
                    instructionJsx: <p>Save the layout and reduce the Net Sales column widths so they fit the object without needing to scroll horizontally</p>
                },
                {
                    instructionJsx: <p>Position the two data views on screen so they appear tidy and aligned</p>,
                    hintJsx: <p>Try selecting both objects and using the align commands from the menu bar at the top. Alternatively, the position of each object relative to the left and top of the screen can be set manually in the <em>position</em> settings in the right-hand menu.</p>
                },
                {
                    instructionJsx: <p>Change the drill path of the new data view to drill from Customer Country to Customer City</p>,
                    hintJsx: <p>To change an already configured drill, select a row and click the <em>drill anywhere</em> icon from the data view context menu</p>,
                    infoJsx: <p>An object can only have one drill configured at a time, although in play mode a user can choose another drill path if desired</p>
                },
                {
                    instructionJsx: <p>Save the screen, switch to play mode and interact with the report</p>
                }
            ]
        },
        {
            name: 'Selection & Algorithms',
            objective: 'Learn how to filter the data from a cube and allow users to do so interactively. Understand how to perform calculations with the data on the fly.',
            tasks: [
                {
                    instructionJsx: <p>Create a new screen called <code>Selection & Algorithms</code></p>
                },
                {
                    instructionJsx: <p>Make a <em>screen selection</em> on Year for <code>2020</code></p>
                },
                {
                    instructionJsx: <p>From the toolbox, add a <em>label</em> object. Enter the <em>substitution formula</em> <code>@Selection</code> as the <em>caption</em> to display the current selection on screen.</p>,
                    infoJsx: <p>Substitution formulas, identified by the prefix <code>@</code>, allow for dynamic text to display in objects such as labels. As well as the currently active selection, they can display the current date <code>@date</code>, user <code>@user</code> or data model <code>@database</code>.</p>
                },
                {
                    instructionJsx: <p>Create a data view showing Net Sales data with Customer Country on the row axis</p>
                },
                {
                    instructionJsx: <p>Add Net Sales data again as a second <em>block</em> to your layout. Click on the block to open the block configuration. From <em>time functions</em>, enable the option <em>previous year</em> to have this block return data from the year prior to the one selected. Set the block <em>header</em> to <code>Net Sales PY</code> to label the column appropriately.</p>
                },
                {
                    instructionJsx: <p>Click the <em>+</em> icon and then the <em>fx</em> icon to add an <em>algorithm</em> block calculating the growth vs. previous year. Set the <em>header</em> as <code>Growth</code>.</p>,
                    hintJsx: <p>The algorithm formula should refer to other blocks by the letter shown next to their name</p>
                },
                {
                    instructionJsx: <p>Add another algorithm block called <code>Growth %</code> to calculate the percentage growth vs. PY, showing 1 <em>decimal digit</em></p>,
                    hintJsx: <p>This should be calculated as <code>Growth / Net Sales PY * 100</code></p>
                },
                {
                    instructionJsx: <p>Give the layout the <em>title</em> <code>Sales Growth</code> and save the layout</p>,
                    infoJsx: <p>The title is displayed in the top-left cell of the data view. It is also useful to identify an object from the list of <em>screen objects</em>.</p>
                },
                {
                    instructionJsx: <p>Use <em>block formatting</em> to add a <code>%</code> symbol to the Growth % block. Ensure the decimal digits are maintained at 1 decimal place.</p>,
                    hintJsx: <p>Block format can be found from the data view menu on the right-hand side. Format all the necessary block elements (values and totals). A decimal digits setting of <code>-1</code> ensures the setting is taken from the layout and not overridden by the block format setting.</p>
                },
                {
                    instructionJsx: <p>Add a <em>selector</em> object to the screen, set to the Product Group entity and with <em>type</em> set to <code>vertical</code></p>,
                    infoJsx: <p>This interactive object allows the user to set or change the screen selection for the specified entity, without needing to go into the main <em>selection editor</em>. The screen selection applies filters to the data being retrieved from the data model on all on-screen objects</p>
                },
                {
                    instructionJsx: <p>Add a <em>pager</em> object for the Area Manager entity, ensuring one area manager is always selected</p>,
                    hintJsx: <p>The <em>no all</em> setting forces the pager to always have a member selected</p>,
                    infoJsx: <p>The pager also applies filters to the data shown in all on-screen objects, when the user chooses an entity member to view. The list of available members to page through is also determined by the screen selection.</p>
                },
                {
                    instructionJsx: <p>Save the screen, switch to play mode and interact with the report</p>
                }
            ]
        },
        {
            name: 'Sorting, Ranking & Alerts',
            objective: 'Learn how to sort the results of a query, use ranking functions and apply conditional formatting to draw users’ attention to the relevant data.',
            tasks: [
                {
                    instructionJsx: <p>Using the screen from the previous exercise as a starting point, create a new screen called <code>Sorting, Ranking & Alerts</code></p>,
                    hintJsx: <p>Use <em>save screen as</em> from the capsule navigation menu to make a copy of a screen</p>
                },
                {
                    instructionJsx: <p>Add a <em>timebar</em> object to the screen with Month on the axis and Net Sales as the trend line. This object both displays data and allows the user to control the selection on the time entity.</p>
                },
                {
                    instructionJsx: <p><em>Sort</em> the data view rows by Net Sales with the highest values shown first</p>,
                    hintJsx: <p>Sorting is found in the <em>filter</em> tab of the layout data window</p> 
                },
                {
                    instructionJsx: <p>Add a <em>ranking function</em> block to display the <em>cumulated vertical %</em> that each country contributes to the total Net Sales</p>,
                    hintJsx: <p>The ranking block needs to be immediately after the block that needs ranking, in this case block a: Net Sales</p>,
                    infoJsx: <p>Ranking functions are in-built functions that you can apply to the data in the preceding block</p>
                },
                {
                    instructionJsx: <p>Add a <em>colour alert</em> to the Growth % block to highlight positive growth of more than 5% in green and negative growth of more than 5% in red. Choose your own colour for positive or negative growth of less than 5%.</p>
                },
                {
                    instructionJsx: <p>Save, switch to play mode and interact with the timebar to narrow the months selected</p>
                }
            ]
        },
        {
            name: 'Chart Basics',
            objective: 'Explore the basics of designing a chart object.',
            tasks: [
                {
                    instructionJsx: <p>Using the screen from the previous exercise as a starting point, save a new screen called <code>Chart Basics</code></p>
                },
                {
                    instructionJsx: <p>Create a <em>cartesian chart</em> object and configure the layout with Sales Volume and previous year Sales Volume data and Month on the <em>category axis</em></p>
                },
                {
                    instructionJsx: <p>Give the layout a <em>title</em> <code>Sales Volume vs PY</code> and save the layout</p>,
                    infoJsx: <p>The layout title in a chart object will be displayed within the title element of the object, which can be positioned anywhere within the object</p>
                },
                {
                    instructionJsx: <p>From the right-hand vertical menu, change the <em>series type</em> for both series from line to <code>bar</code></p>
                },
                {
                    instructionJsx: <p>On the <em>primary y-axis</em>, set the <em>decimals</em> shown to <code>0</code></p>
                },
                {
                    instructionJsx: <p>Return to the layout, add an algorithm block to the chart to calculate growth rate from previous year (calculate as a decimal this time, not a percentage)</p>
                },
                {
                    instructionJsx: <p>Set the Growth % series to <em>type</em> <code>spline</code> and plot this on the <em>secondary axis</em>. Show <em>markers</em> and <em>labels</em> for this series and format the <em>secondary y axis</em> as a <em>percentage</em></p>
                },
                {
                    instructionJsx: <p>Resize and position the <em>plot, title and legend</em>objects within the chart object to optimize the display</p>
                },
                {
                    instructionJsx: <p>Create a second cartesian chart on screen. Copy the layout from the data view and paste it as the new chart's layout</p>,
                    infoJsx: <p>Layouts can be pasted between objects, even objects of different types, so the data configurations and calculations can be easily reused</p>
                },
                {
                    instructionJsx: <p>Remove the blocks for Net Sales PY, Growth and Growth %. From <em>axis settings</em>, remove <em>down totals</em>. Change the layout title to <code>Sales by Country</code> and save the layout.</p>
                },
                {
                    instructionJsx: <p>In series options, set the Net Sales series to type <code>bar</code>. Leave Cumulated Vertical % series as a line but show on the secondary axis.</p>
                },
                {
                    instructionJsx: <p>Return to the layout and add Product Division to the <em>series axis</em>. Remove the <em>row totals</em> setting from the Net Sales block. Save the layout.</p>,
                    infoJsx: <p>Series in a chart are driven by both the blocks being displayed and the entity displayed on the series axis</p> 
                },
                {
                    instructionJsx: <p>In series options, set the Net Sales series for each Product Division to series type bar and the Cumulated Vertical series for each Product Division to show on the secondary axis.</p>
                },
                {
                    instructionJsx: <p>Set the <em>combine mode</em> of each of the Net Sales series to <code>stack</code></p>
                },
                {
                    instructionJsx: <p>Pick a colour for each Product Division and set the <em>series color</em> for both Net Sales and Cumulated Vertical series to that colour</p>
                }
            ]
        },
        {
            name: 'Home Screen',
            objective: 'Design a visually appealing capsule home screen to welcome users on opening the application and display some high-level metrics',
            tasks: [
                {
                    instructionJsx: <p>From the left-hand capsule navigation menu, open the Home screen</p>
                },
                {
                    instructionJsx: <p>In <em>screen properties</em>, set the <em>background color</em> to a colour of your choosing</p>,
                    hintJsx: <p>For a more interesting look, set the <em>type</em> to <code>gradient</code> and choose two colours for a gradient background</p>
                },
                {
                    instructionJsx: <p>Open the <em>screen selection</em> and set a <em>dynamic selection</em> on Year, <em>based on cube</em> Net Sales, using <em>latest period</em></p>,
                    infoJsx: <p>Dynamic selections allow the default selection in a screen to be dynamically updated with reference to the data itself</p>
                },
                {
                    instructionJsx: <p>Save the screen and navigate to the <em>images</em> section of the capsule. Upload the <em>London.jpg</em> image from the Pictures library or wherever you have saved the image locally.</p>
                },
                {
                    instructionJsx: <p>Return to the Home screen, create a <em>label</em> from the toolbox, position in the top-left of the screen and set it to <em>size</em> <code>1920 x 582</code> pixels. Remove the 'label' <em>caption</em>.</p>
                },
                {
                    instructionJsx: <p>Set the label <em>background</em> to be the London.jpg image. Set the <em>stretch option</em> to <code>fill</code>.</p>,
                    hintJsx: <p>The background setting is found in the <em>colors</em> menu, where <em>type</em> should be set to <code>image</code></p>,
                    infoJsx: <p>The fill options determine if and how the image might be resized to fit the label object</p>
                },
                {
                    instructionJsx: <p>Add another label to the screen, positioned on top of the image. Enter the <em>caption</em> as <code>Sales Reporting</code>. Set the <em>background color</em> to be transparent so the image can still be seen behind. Increase the <em>font size</em> and change the colour to make the text prominent.</p>,
                    hintJsx: <p>In the colour picker, click the chequered box to set a colour to transparent. Alternatively, set the <em>alpha</em> value (final value) of the <em>rgba</em> to between 0 and 1 for semi-transparency.</p>
                },
                {
                    instructionJsx: <p>From the toolbox, create a <em>gauge</em> object and position in the bottom half of the screen. Configure the layout with blocks for Net Sales and Net Sales PY.</p>
                },
                {
                    instructionJsx: <p>In the block configuration, set the <em>divide by</em> value to <code>1,000</code> to show the values in thousands</p>
                },
                {
                    instructionJsx: <p>In the <em>layout select</em>, make a selection on Product Division <code>Everyday products</code>. Set the layout title as <code>EP Sales (£000s)</code>.</p>,
                    infoJsx: <p>The layout selection applies a selection in addition to the screen selection to that specific layout. If the layout selection is on the same entity as the screen selection, the layout selection will take precedence.</p>
                },
                {
                    instructionJsx: <p>Add an <em>algorithm block</em> with header <code>Target</code>, calculated at 20% increase on PY sales</p>,
                    hintJsx: <p><code>b * 1.2</code></p>
                },
                {
                    instructionJsx: <p>In the <em>gauge settings</em> of the layout, set the <em>value</em> as the Net Sales block and the <em>max</em> as the Target block. Remove anything set to <em>second or third value</em>.</p>,
                    infoJsx: <p>The gauge can visualize up to three values with the progress against the values set to <em>min </em> and <em>max</em>. If min and max are omitted, the scale will be calculated automatically based on the data.</p>
                },
                {
                    instructionJsx: <p>Save the layout and set the gauge <em>background</em> to be transparent so it blends into the screen. Set the <em>bar color</em> to match your chosen colour for Everyday Products from the previous exercise.</p>
                },
                {
                    instructionJsx: <p>Copy the gauge object and paste a second one alongside the first</p>
                },
                {
                    instructionJsx: <p>Change the layout select and title for this one to display data for <code>Delicacies</code> Product Division. Set the bar color property to the corresponding colour for that Division.</p>
                },
                {
                    instructionJsx: <p>Save the screen and navigate to <em>system administration</em>, using the Board button menu in the top-left of the screen. From there, go to <em>theme</em> and upload the Northwind.jpg image to appear as the <em>logo</em> in the banner menu.</p>,
                    infoJsx: <p>The theme settings will be displayed across the entire Board application, not just a specific capsule</p>
                }
            ]
        },
        {
            name: 'Masks',
            objective: 'Configure a wireframe template for the reports in this capsule, ensuring a consistent look & feel between them',
            tasks: [
                {
                    instructionJsx: <p>From the capsule menu, navigate to <em>Masks</em> and create a new mask, called <code>Dashboard</code></p>
                },
                {
                    instructionJsx: <p>In <em>screen properties</em>, set the <em>background colour</em> to a colour of your choice and set the <em>screen size</em> to <code>custom</code>, with width and height set to <code>1920 x 820</code></p>,
                    infoJsx: <p>Screen size determines the maximum number of pixels available to place objects on the screen. The <em>fit mode</em> will determine whether the objects automatically resize if the user's viewport is less than the screen size. If not, scroll bars will be shown instead.</p>
                },
                {
                    instructionJsx: <p>Create a label, removing the <em>caption</em> and setting the <em>border color</em> to black or white (depending on whether your screen background is light or dark)</p>
                },
                {
                    instructionJsx: <p><em>Position and size</em> the label accurately by setting the <em>top, left, width and height</em> properties according to the wireframe diagram below. Copy and paste the label for each of the seven sections of the wireframe.</p>,
                    image: 'dashboard-wireframe.png',
                    imageAlt: 'Wireframe of dashboard template with position and size settings for each label'
                },
                {
                    instructionJsx: <p>Give the three larger area labels a background colour distinct from the screen background colour. Give the four thin labels another distinct background colour.</p>,
                    hintJsx: <p>Different shades of the same colour can look more attractive than several wildly different colours. To set each group of labels the same colour, hold down Ctrl when clicking to select them to select together. Properties can then be set for all selected objects at once.</p>
                }
            ]
        },
        {
            name: 'Dashboard Design Part 1',
            objective: 'Create a dashboard to compare the performance between the Product Groups within Northwind. Use a treemap to highlight the sales distribution in a more modern way. Understand how labels can display data and help to keep a consistent look across screens.',
            tasks: [
                {
                    instructionJsx: <p>Create a new screen <em>folder</em> called <code>Sales Analysis</code> and create a new <em>screen</em> in that folder called <code>Product Group</code>, setting it to use the Dashboard <em>mask</em></p>,
                    infoJsx: <p>Screens using the mask will display the mask objects in the background of the screen. If they are moved or edited in the mask this will automatically update all screens using the mask.</p>
                },
                {
                    instructionJsx: <p>Set a <em>dynamic selection</em> on the Day entity, based on cube Net Sales using <em>latest period year-to-date</em></p>
                },
                {
                    instructionJsx: <p>Using the mask background as a guide, create a <em>treemap</em> object and position in the top-left tile of the wireframe. Configure the treemap layout to show Net Sales by Product Group.</p>,
                    hintJsx: <p>The mask background will help you position the object by dragging but to position and size it precisely, refer to the settings from the wireframe and set them directly on the object.</p>
                },
                {
                    instructionJsx: <p>From the right-hand treemap menu, set the <em>data blocks</em> to use the Net Sales block for both value and colour, which will determine both the size and the intensity of the colour shading of each rectangle in the treemap. In <em>colors</em> set the <em>color</em> property to a colour of your choice for treemap rectangles.</p>
                },
                {
                    instructionJsx: <p>Add a label and position on the left-side of the banner tile above the treemap. Set the caption to <code>Sales Distribution</code>. Set the <em>background</em> to transparent and format the font appropriately to appear as a title to the treemap.</p>
                },
                {
                    instructionJsx: <p>Copy the label and paste another one on the right side of the banner tile. Set the caption to <code>Net Sales £</code>. Add a layout to the label to display the total Net Sales. Add the Net Sales data and an algorithm block to display this in millions, formatted with the suffix <code>m</code>, e.g. <code>1.2m</code>. Set the <em>algorithm type</em> as <code>text</code> and in <em>label settings</em> set block b as the <em>show value</em>.</p>,
                    hintJsx: <p>Set the algorithm expression as <code>ROUND(a/1000000,1)&”m”</code></p>
                }
            ]
        },
        {
            name: 'Dashboard Design Part 2',
            objective: 'Learn how to make a chart object fit in with the style of the rest of the screen',
            tasks: [
                {
                    instructionJsx: <p>Create a <em>cartesian bar chart</em> in the bottom-left wireframe tile showing Net Sales and previous year Net Sales by Product Group on the categories axis</p>
                },
                {
                    instructionJsx: <p>Have the chart display horizontally by opening the <em>cartesian options</em> menu and enabling <em>switch orientation</em></p>
                },
                {
                    instructionJsx: <p>In the <em>elements</em> menu, hide the title and legend by disabling their <em>visible</em> property. Resize the plot element to fill the entire chart object. Set the <em>background</em> and <em>plot</em> color properties to transparent, so the color from the mask tile is shown as the background.</p>
                },
                {
                    instructionJsx: <p>Copy and paste the two labels from the treemap banner tile and position them similarly on the cartesian chart banner tile. Change the caption of the title label to <code>Sales vs PY</code> and amend the layout of the right-hand label to calculate and display the total variance between the current and previous years.</p>,
                    hintJsx: <p>The calculation can be performed directly in the text algorithm being displayed or can be calculated in a separate block which can be referred to in the text algorithm</p>
                }
            ]
        },
        {
            name: 'Dashboard Design Part 3',
            objective: 'Explore how to format a data view to incorporate the style of the screen',
            tasks: [
                {
                    instructionJsx: <p>Create a data view in the large tile, with columns for Net Sales, Sales Volume, Standard Costs and algorithms calculating Avg Price, Margin, Margin %. Show this data by Product Group and Product Division on the row axis.</p>,
                    hintJsx: <p>Avg Price = <code>Net Sales / Sales Volume</code> Margin = <code>Net Sales - Standard Costs</code> Margin % = <code>Margin / Net Sales * 100</code></p>                      
                },
                {
                    instructionJsx: <p>Format the data view to blend in to the screen better. From the <em>table style</em> menu, disable <em>alternate row formatting</em>, hide <em>vertical and horizontal border lines</em> and in <em>colors</em>, set <em>cell background</em> to transparent.</p>
                },
                {
                    instructionJsx: <p>Experiment with some of the other colour properties to achieve your desired look</p>,
                    hintJsx: <p>Header, group by, total and grand total are the most important properties to set. Note that as well as background colours, text (foreground) colours are set in the colours menu of a data view, not in the font menu as for other objects.</p>
                },
                {
                    instructionJsx: <p>Copy and paste the banner labels again, this time setting the title to <code>Avg Price & Margin</code> and displaying the total margin prominently</p>
                }
            ]
        },
        {
            name: 'Drill to Screen',
            objective: 'Build a more powerful drill capability by configuring a new screen as the drill destination',
            tasks: [
                {
                    instructionJsx: <p>Save the Product Group screen as a new screen, named <code>Product Detail</code>. Keep it outside of the Sales Analysis folder.</p>
                },
                {
                    instructionJsx: <p>Amend the layouts for the treemap, chart and data view, changing the axis of each from Product Group to Product</p>
                },
                {
                    instructionJsx: <p>Add a label positioned on the left side of the banner at the top of the screen, setting the caption with the substitution formula <code>@Product Group</code></p>,
                    infoJsx: <p>Where @Selection returns the entire screen selection, <code>@Entity Name</code> returns the selection on the named entity only. Note the name is case sensitive so must match the name given in the data model.</p>
                },
                {
                    instructionJsx: <p>Save the screen and return to the Product Group screen. Set up a <em>drill to screen</em> action on each of the objects, with the Product Detail screen as the target.</p>,
                    hintJsx: <p>To set a drill on a chart object, click on one of the elements (e.g. bars on the bar chart) to select it and choose <em>drill down</em> from the object context menu</p>,
                    infoJsx: <p>Drill to screen allows a new screen to be opened when the drill is executed, carrying in an additional selection to the destination screen based on the entity member drilled on</p>
                }
            ]
        },
        {
            name: 'Geo Map & Containers',
            objective: 'Using the Product dashboard as a template, design a Geographical dashboard. Learn how to configure the geo map object and use containers to enable more objects to be displayed on a screen without overwhelming the user.',
            tasks: [
                {
                    instructionJsx: <p>Save the Product Group screen as a new screen, named <code>Geographical</code>. Place this screen into the Sales Analysis folder.</p>
                },
                {
                    instructionJsx: <p>On the cartesian chart, change the category axis to Continent. On the treemap and data view, change the row axis to Country and Continent.</p>,
                    hintJsx: <p>With the introduction of a grouping entity on the treemap, the title element may need formatting to fit with the colour scheme</p>
                },
                {
                    instructionJsx: <p>Add a <em>tab container</em> to the screen and set its background colour to transparent</p>,
                    infoJsx: <p>Containers allow multiple objects to be stored within a single container, which displays them in various ways. The tab will allow one object to be viewed at a time when the user clicks the relevant named tab. All objects on a screen are refreshed with data, regardless of which ones are visible.</p>
                },
                {
                    instructionJsx: <p>Move the data view into the container by <em>copying</em> the data view object, <em>pasting</em> it into the container and then <em>deleting</em> the original</p>
                },
                {
                    instructionJsx: <p>Position and size the tab container onto the large tile from the wireframe template. Insert a new <em>geo map</em> object from the toolbox into the container</p>,
                    hintJsx: <p>The tab container must be selected by clicking on it (or use the screen objects menu on the left-hand side) before dragging the new geo map object into it</p>
                },
                {
                    instructionJsx: <p>Select the geo map object and configure the layout with the data Net Sales, Latitude, Longitude. Set Branch on the <em>markers axis</em>.</p>,
                    infoJsx: <p>The entity used on the markers axis means that each member of that entity will be visualized as a bubble on the map</p>
                },
                {
                    instructionJsx: <p>In the layout geo map settings, open the <em>bubbles</em> options and set the <em>latitude and longitude</em> to the respective data blocks. This will position the bubbles in the correct locations.</p>
                },
                {
                    instructionJsx: <p>Below, set the <em>visible</em> property to only include blocks that should drive the size of the bubbles</p>,
                    hintJsx: <p>Latitude and longitude should be deselected as they are used to determine the position, not the size of the bubble</p>,
                    infoJsx: <p>Multiple properties can be configured to drive the size (and colour) of the bubbles. The geo map will default to the first one selected but the user can choose to use another one using the geo map menu bar.</p>
                },
                {
                    instructionJsx: <p>Select the tab container and set the name of each tab as <code>Data</code> for the data view tab and <code>Branch Map</code> for the geo map tab</p>
                },
                {
                    instructionJsx: <p>Add a selector object to the left-hand side of the top banner from the wireframe. Set it to the Continent entity and format appropriately. Test it out in play mode and note how the map behaves when a continent is selected.</p>
                },
                {
                    instructionJsx: <p>On the geo map, configure a <em>colour alert</em> to show if target has been achieved for each Branch. Targets don’t exist in the data model so as a placeholder, add an <em>algorithm</em> block to the layout to define the target as 20% increase on previous year Net Sales.</p>,
                    hintJsx: <p>First add a second block with Net Sales data and apply the <em>previous year</em> time function. Then add an algorithm block with expression <code>Net Sales PY * 1.2</code> and header <code>Target</code>.</p>
                },
                {
                    instructionJsx: <p>Define a variance algorithm, <code>Net Sales – Target</code>, and add a <em>colour alert</em> on the block to show the bubble as green if target is achieved and red if it is not. Set this block as the <em>color</em> block in the geo map settings.</p>,
                    hintJsx: <p>The target is achieved if the variance is zero or a positive value. The target is not achieved if the variance is a negative value. Set the color alert thresholds accordingly.</p>
                }
            ]
        },
        {
            name: 'Area Geo Map',
            objective: 'Learn how to configure an area geo map and use GeoJSON files to customize the map',
            tasks: [
                {
                    instructionJsx: <p>Copy the geo map from the previous exercise and paste into the same tab container, creating another geo map tab. Name this tab <code>Country Map</code>.</p>
                },
                {
                    instructionJsx: <p>From the geo map right-hand menu, click <em>upload GeoJSON</em>. Navigate to the <em>JSON library</em>, add the <code>world_low</code> JSON and save</p>,
                    infoJsx: <p>GeoJSONs are used to define specific geographical areas. These can be used to display and colour specific areas on the map (e.g. countries, administrative regions, delivery areas) instead of the bubbles.</p>                                
                },
                {
                    instructionJsx: <p>Edit the geo map layout. Remove the Longitude and Latitude blocks. Change the <em>markers axis</em> to Customer Country and in <em>axis settings</em>, change the <em>display mode</em> to <code>code</code>. Add an <em>entity block</em> with the Customer Country entity, setting the <em>heading</em> as <code>Name</code>.</p>,
                    hintJsx: <p>An entity block can be added by dragging from the entity list on the left-hand side to the <em>data</em> section of the layout</p>,
                    infoJsx: <p>For an area map, the members' code or description of the entity used on the markers axis needs to match with the areas defined in the GeoJSON file. Alternatively the co-ordinates can be used from the longitude and latitude.</p>
                },
                {
                    instructionJsx: <p>In <em>geo map settings</em>, turn off the <em>bubbles</em> option and activate the <em>map areas</em> option. Set <em>shape name</em> to the Customer Country entity to match the country codes to the geographical areas defined in the GeoJSON. Set the <em>color</em> setting to the Variance algorithm block.</p>
                }
            ]
        },
        {
            name: 'Sales Person Dashboard',
            objective: 'Design a dashboard for the sales team. Learn how to use the card object to present images and discrete data across an entity and combine with master object functionality to provide an intuitive way to control selection.',
            tasks: [
                {
                    instructionJsx: <p>Use the Product Group screen as a template for a new screen called <code>Sales Person</code> and move this into the Sales Analysis folder</p>
                },
                {
                    instructionJsx: <p>On the data view layout, change the axis to Branch and <em>sort</em> by Margin <em>descending</em> and <em>keep top</em> 20 branches. Deactivate the <em>keep totals</em> setting to ensure the overall totals are still displayed.</p>,
                    hintJsx: <p>For sorting, navigate to the <em>filter</em> tab of the data configuration in the layout</p>,
                    infoJsx: <p>The keep totals setting means that the totals shown are those of the filtered 'top x' rows only. Deactivating the setting means the totals displayed remain the total for all rows.</p>
                },
                {
                    instructionJsx: <p>Set the layout title to <code>Top 20 Branches</code> to make it clear that not all are shown</p>
                },
                {
                    instructionJsx: 
                        <div>
                            <p>Delete the treemap object and add a new <em>card</em> object to the top-left hand mask tile. Configure layout with Sales Person on the <em>row axis</em> and with the following data blocks:</p>
                            <ul>
                                <li>Data: Sales Person Picture</li>
                                <li>Data: Working Hours, <em>hidden</em></li>
                                <li>Algorithm: <code>“Working Hours: “&b</code>, <em>data type</em> set to <code>text</code></li>
                                <li>Entity: Area Manager, <em>hidden</em></li>
                                <li>Algorithm: <code>"Manager: &d"</code>, <em>data type</em> set to <code>text</code></li>
                            </ul>
                        </div>,
                    infoJsx: <p>In this object, each member of the entity on the row axis generates their own card. Within the card, each data block is visualized as a discrete element of the card that can be positioned as desired.</p>
                },
                {
                    instructionJsx: <p>In the preview window of the layout, arrange the blocks within the card. Resize the picture block to fit down the entire left side of the card, with the other blocks arranged in rows across the right side. Save the layout.</p>,
                    infoJsx: <p>In the preview it appears that not much space is available within the card. However when the report is run, the elements within the card will size proportionally to fill all available space, based on the card settings. So an element taking up half of the card will always take up half of the card no matter the size of the card.</p>
                },
                {
                    instructionJsx: 
                        <div>
                            <p>Configure the card with <em>master object</em> enabled and the following <em>card settings</em>:</p>
                            <ul>
                                <li>Card width type: Dynamic</li>
                                <li>Card height: 150</li>
                                <li>Card min width: 200</li>
                                <li>Card max width: 250</li>
                                <li>Card gap: 5</li>
                            </ul>
                            <p>Edit the <em>colours</em> to fit in with your colour scheme</p>
                        </div>,
                    hintJsx: <p>The background colours of the data blocks can be set in the <em>color alert</em> settings in the layout</p>,
                    infoJsx: <p>A card width type of fixed means that cards will always be the same size and will be arranged within the object depending on the size of the object. A dynamic width means that the width can be set as a range and Board will size the cards within this range to optimise their arrangement in the space available for the object.</p>
                },
                {
                    instructionJsx: <p>In the Sales vs PY chart, change the <em>category axis</em> to Sales Person</p>
                },
                {
                    instructionJsx: <p>In the data view, we would like to know which country each Branch belongs to. Add Branch Country to the <em>row axis</em> – note how the sorting behaves in this case.</p>,
                    infoJsx: <p>When using a grouping entity, sorting takes place within each group, as well as sorting the groups themselves based on the group totals</p>
                },
                {
                    instructionJsx: <p>We don't want the branches to be grouped into their countries as this means the sorting takes place within each Branch Country. Remove Branch Country from the row axis and add it as a data block instead.</p>,
                    infoJsx: <p>Adding an entity as a data block can have two different behaviours. If the entity added is a parent of the entity on the row axis, the block will display the name of the parent member for each child. If the entity added as a data block is a child of the entity on the row axis, the block will display a count of the number of children each parent member has. If the entities are unrelated, it will simply show a count of the number of currently selected members.</p>
                },
                {
                    instructionJsx: <p>The master object allows a selection to easily be made on an individual sales person. Amend the layout for the three labels with data, to show values in thousands instead of millions if the value being shown is less than 100,000. This will ensure smaller individual totals can be easily read.</p>,
                    hintJsx: <p>Use an <em>IF</em> function in the algorithm formula to test if the value to be shown is less than 100,000 and return the value with the relevant denominator and suffix ("m" or "k")</p>
                }
            ]
        },
        {
            name: 'Menu & Navigation',
            objective: 'Guide the user through the application with intuitive menus',
            tasks: [
                {
                    instructionJsx: <p>In the Sales Report <em>mask</em>, create a <em>menu</em> object in the top banner, with position set on the Sales Analysis folder</p>,
                    infoJsx: <p>The position of a menu can be set to any folder within the screen list and will then display only the screens within that folder. Folders can be nested to form a 'directory' of screens and some menu types will allow navigation through this directory.</p>
                },
                {
                    instructionJsx: <p>Add a <em>calendar</em> object to the right-hand side of the top banner, to allow the user to select the exact time range. Save the mask - the menu and calendar will automatically be applied to all screens using it.</p>
                },
                {
                    instructionJsx: 
                        <div>
                            <p>On the Home screen, create a more graphical type of menu using labels. Create three <em>labels</em> with <em>size</em> <code>64 x 64 pixels</code>. For each one, change the <em>background colour</em> to <code>image</code> and set an appropriate icon for the Product Group, Geographical and Sales Person screens. Use the <em>link</em> option to embed images directly from other sources, such as icon libraries. Images used in solution exercise are:</p>
                            <ul>
                                <li><a href="https://img.icons8.com/dusk/64/000000/ingredients.png" target="_blank" rel="noopener noreferrer">Product Group</a></li>
                                <li><a href="https://img.icons8.com/dusk/64/000000/globe-earth.png" target="_blank" rel="noopener noreferrer">Geographical</a></li>
                                <li><a href="https://img.icons8.com/dusk/64/000000/businesswoman.png" target="_blank" rel="noopener noreferrer">Sales Person</a></li>
                            </ul>
                        </div>
                },
                {
                    instructionJsx: <p>On each label, set the <em>action type</em> as <code>go to screen</code> and set the target screen accordingly</p>
                },
                {
                    instructionJsx: <p>In <em>comments</em>, set a <em>tooltip</em> on each label to inform the user of the destination screen when they hover the cursor over the icon</p>
                },
                {
                    instructionJsx: <p>In <em>graphic effect</em>, set the object <em>transparency</em> to <code>50%</code> - this will create a highlighting effect when the user moves their cursor over the icon.</p>
                }
            ]
        },
        {
            name: 'Order Analysis (Independent Task)',
            objective: 'Use the techniques you have learned to create an order analysis screen with your own style. Use the previous dashboards as a template or experiment with other objects – the choice is yours.',
            tasks: [
                {
                    instructionJsx: <p>For this exercise, you will create a screen that does some analysis of the orders data, as opposed to the net sales. You can use the Product Group screen as a template, create a new screen with the Dashboard mask or design your own screen from scratch! The management team want a report to help them analyse the following.</p>
                },
                {
                    instructionJsx: <p>Visualize the order distribution between countries. This could be with a treemap or another chart object.</p>
                },
                {
                    instructionJsx: <p>Display how the orders have tracked week-by-week comparing the current year to the previous year. A cartesian line chart could be suitable but feel free to display this how you wish.</p>
                },
                {
                    instructionJsx: <p>Build a table showing average order value by Customer, grouped by Sales Person.  Produce a report where you can show the Net Sales, Order Count and the Average Order Value for the current year. The average order value for the previous year should also be shown, with a variance between current and previous year calculated.</p>
                },
                {
                    instructionJsx: <p>Allow the user to retrieve a listing of the orders for each customer from the orders database. A <em>drill-through</em> protocol has already been set-up to facilitate this.</p>
                },
                {
                    instructionJsx: <p>Display prominently the overall number of orders, total variance between current and previous year and the overall average order value</p>
                },
                {
                    instructionJsx: <p>Ensure that the user can easily filter the data by entities that you feel are relevant to this analysis</p>
                },
                {
                    instructionJsx: <p>Add an icon to the Home screen to allow access this screen and ensure it is accessible within the capsule menu. You may find this image useful: <a href="https://img.icons8.com/dusk/64/000000/purchase-order.png" target="_blank" rel="noopener noreferrer">Order icon</a></p>
                }
            ]
        },
        {
            name: 'Dynamic Icons & Tooltips',
            objective: 'Enhance the style and accessibility of your report with dynamic icons and use tooltips to provide additional information without cluttering the screen.',
            tasks: [
                {
                    instructionJsx: <p>Navigate to capsule <em>images</em> and add <code>up-right.png</code> and <code>down-right.png</code> from the Pictures folder or the location you saved them locally.</p>
                },
                {
                    instructionJsx: <p>In the data view on the Orders screen, add a new <em>algorithm</em> block with <em>data type</em> of <code>picture</code> that displays the correct icon depending on whether the orders have increased or decreased from the previous year. Set the <em>header</em> as a space character to prevent the formula being displayed in the column header.</p>,
                    hintJsx: <p>The algorithm should use an IF function to determine whether the orders have increased or not and return the filename of the image to display, in double quotes, e.g. <code>IF(...,"up-right.png","down-right.png")</code></p>,
                    infoJsx: <p>To refer to an image in the capsule image library, simply return the filename as the result of the algorithm. You can also return a URL to display an image hosted externally.</p>
                },
                {
                    instructionJsx: <p>Save the layout and resize this column to <code>20 pixels</code> so the row heights are not stretched</p>,
                    hintJsx: <p>With the data view selected, open <em>columns</em> from the right-hand vertical menu, choose the algorithm block you just created and set the width</p>,
                    infoJsx: <p>Picture blocks will always keep the images in their proportion by setting the row height to correspond with whatever you set the column width to</p>
                },
                {
                    instructionJsx: <p>Add another algorithm block to display text to inform whether there has been an increase or decrease from previous year and the value of that increase or decrease</p>,
                    hintJsx: <p>In the algorithm formula, use the same IF function logic as for the picture algorithm to check if orders have increased or not but this time return the text "Increased" or "Decreased". Then concatenate the value of the variance, using the function <code>ABS(...)</code> to show the value as a positive regardless of whether it is an increase or decrease.</p>
                },
                {
                    instructionJsx: <p>Display this text as a tooltip instead of another column by <em>hiding</em> the algorithm block, adding a new empty algorithm block and applying the text block as a <em>tooltip</em> for it.</p>,
                    hintJsx: <p>An empty algorithm block can be created by simply setting the formula to <code>0</code> (numerical data type) or an empty string <code>""</code> (text data type). Set the header to a space character to keep it blank as well. Apply the tooltip to this empty block from the right-hand configuration menu.</p>
                },
                {
                    instructionJsx: <p>Save the layout and resize this column to <code>20 pixels</code> as well. Switch to play mode and hover over the tooltip icon to test.</p>
                }
            ]
        },
        {
            name: 'Reporting on a Top-Down Hierarchy',
            objective: 'Create a financial report to provide analysis of the organization\'s expenses using the unbalanced hierarchy functionality',
            tasks: [
                {
                    instructionJsx: <p>Create a new <em>screen folder</em> called <code>Financial Analysis</code>. In it, create a new <em>screen</em> called <code>Business Unit Expenses</code>. Leave the <em>mask</em> as blank for now.</p>
                },
                {
                    instructionJsx: <p>Save the Dashboard <em>mask</em> as a new one called <code>Finance</code>. This mask will be used for screens in the new Financial Analysis folder. Change the <em>position</em> of the <em>menu</em> object to this folder. As Day is not a relevant entity for this analysis, replace the <em>calendar</em> object with a <em>selector</em> set to <code>Fiscal Year</code>. Change the <em>selector type</em> to <code>horizontal</code> and position it appropriately in the top-right. Finally, change the <em>show active members</em> setting to <code>at their position</code> to avoid the fiscal years being shown in an illogical order when selected.</p>
                },
                {
                    instructionJsx: <p>Resize and position the labels to match the wireframe. In the title for the left-hand panel, add the <em>caption</em> <code>Selections</code> as this panel will be used to provide objects related to the selection, which will be customized for the individual screens but always in a consistent area. If desired, change the colour scheme of the labels to give the financial screens a different look.</p>,
                    image: 'finance-wireframe.png',
                    imageAlt: 'Wireframe of dashboard template with position and size settings for each label'
                },
                {
                    instructionJsx: <p>Save the mask, then click on <em>masks</em> from the capsule navigation menu on the left-hand side. Select the Finance mask and drag the new Business Unit Expenses screen to the left panel to assign this mask to the screen.</p>
                },
                {
                    instructionJsx: <p>Navigate to the Business Unit Expenses <em>screen</em>. In the <em>screen select</em>, set a <em>dynamic selection</em> on entity Fiscal Year, <em>based on cube</em> <code>Department Expenses</code> using <em>latest period</em>.</p>
                },
                {
                    instructionJsx: <p>Add a <em>data view</em> to the middle mask tile. Configure the <em>layout</em> with data from cube Department Expenses, with Business Unit on the row axis and Month on the column axis. Remove <em>down totals</em> from this layout and save.</p>,
                    infoJsx: <p>Business Unit is an entity using the <em>unbalanced hierarchy</em> property, meaning a top-down hierarchy is contained within the single entity. Note that the data view automatically indents the Business Unit names to show their level in the hierarchy. Grouping nodes are also shown in bold, to distinguish from the leaf levels of the tree.</p>
                },
                {
                    instructionJsx: <p>To save formatting the data view, open one of the Sales Analysis screens. Select a data view and from the top-right menu bar choose <em>copy format</em> and then paste it onto the Department Expenses data view.</p>
                },
                {
                    instructionJsx: <p>As there is not enough space to display twelve months of expenses without scrolling horizontally, you can restrict the user to only having one Quarter selected at a time, so there will only ever be three months shown. Put an appropriate object into the Selections mask tile and configure it accordingly.</p>,
                    hintJsx: <p>Use a <em>pager</em> object set to the Quarter entity with <em>no all</em> active. This will ensure only one Quarter is always selected.</p>
                },
                {
                    instructionJsx: <p>From the data view, right-hand configuration menu, activate <em>numbers scaling</em> to show the values in thousands or millions as appropriate</p>
                },
                {
                    instructionJsx: <p>Add a new <em>selector</em> to the selections panel, set to the Business Unit entity and with <em>selector type</em> <code>vertical</code>. Note that by default it displays this entity as a collapsed hierarchy. Set the <em>default tree depth</em> to <code>1</code> for an easier starting point for the user. Ensure the object is sufficiently long to allow some space for the user to expand the hierarchy nodes without scrolling.</p>
                },
                {
                    instructionJsx: <p>In the right-hand mask tile, add a new <em>tree</em> object to visualize the Business Unit hierarchy.</p>,
                    infoJsx: <p>This object visualizes a diagram of the hierarchies in the data model and allows data to be displayed against each node. It can be used for both regular Board hierarchies, using related entities, or a single entity using the unbalanced hierarchy.</p>
                },
                {
                    instructionJsx: <p>Configure the <em>layout</em> to show Department Expenses data with Business Unit on the row axis. In the preview area, rearrange the label and data items to stretch across the tree node, one on top of the other, rather than side-by-side. In <em>tree settings</em>, set both <em>horizontal alignment</em> and <em>vertical alignment</em> to <code>center</code> for both the label and Department Expenses elements.</p>
                },
                {
                    instructionJsx: <p>Add additional blocks to retrieve the Department Expenses for the previous quarter and then calculate the difference between the selected and previous quarters. <em>Hide</em> these additional blocks so they are not shown in the visualization, or to show them in a tooltip, simply resize the element in the preview to have no size.</p>,
                    hintJsx: <p>For the previous quarter, use time functions to set a <em>period offset</em> of <code>-3</code>. This will offset the data by 3 months as the cube is dimensioned by Month.</p>,
                    infoJsx: <p>When using time functions such as <em>previous period</em> or <em>period offset</em> the period in question refers to the time dimension used in the cube</p>
                },
                {
                    instructionJsx: <p>On the initial Department Expenses block, set a <em>color alert</em> to highlight the value in green if the expenses have decreased from the previous quarter and in red if they have increased.</p>,
                    hintJsx: <p>Set the <em>use values of block</em> to reference the variance calculation. Use the <code>blocks</code> color alert type to highlight tbe background instead of the text.</p>
                },
                {
                    instructionJsx: <p>Save the layout and the tree will visualize with the entire hierarchy. This is a little overwhelming so from the tree configuration menu on the right-hand side, set the <em>depth</em> to <code>1</code> to initially visualize the first layer only. Set the <em>tree direction</em> to <code>top to bottom</code>. Set the <em>color</em> properties to suit your colour scheme.</p>
                },
                {
                    instructionJsx: <p>Save the screen and switch to <em>play mode</em>. Test out the objects and note the differences brought about by the use of unbalanced hierarchy. For example, the selector has some additional options specific to using this hierarchical entity. When drilling on the data view, it is possible to drill to the same entity (Business Unit) to obtain a drill on the next level down in the hierarchy. Finally, the tree object is interactive to allow opening and closing of the hierarchy nodes.</p>
                },
                {
                    instructionJsx: <p>Return to the home screen and add an icon for the Business Expenses screen. You can use <a href="https://img.icons8.com/dusk/64/000000/ledger.png" target="_blank" rel="noopener noreferrer">this</a> or source your own.</p>
                }
            ]
        },
        {
            name: 'Capsule Tiles',
            objective: 'Style the entry point to your application, the capsule tile, with colours, images and data.',
            tasks: [
                {
                    instructionJsx: <p>From the Board button, navigate to the capsules main menu. Go into <em>design</em> mode and edit the capsule <em>properties</em> for your Sales Reporting capsule. This is accessed via the hamburger menu on the capsule tile.</p>
                },
                {
                    instructionJsx: <p>Configure the <em>sparkline</em> to plot Net Sales by Week, naming the data block <em>header</em> so it shows clearly what is being represented on the tile</p>
                },
                {
                    instructionJsx: <p>Limit the data to the current year. Click the <em>select</em> button and put a <em>dynamic selection</em> on Year to select the latest year of sales</p>
                },
                {
                    instructionJsx: <p>Configure the <em>footer</em> to show a count of the orders, using an algorithm text block to give the description of this measure in the footer</p>,
                    hintJsx: <p>In the algorithm formula, concatenate the description in double-quotes with the data block. In label settings, set the algorithm block as the <em>show value</em>.</p>
                },
                {
                    instructionJsx: <p>Set an <em>icon</em> to the capsule tile. You can use <a href="https://img.icons8.com/dusk/64/000000/total-sales.png" target="_blank" rel="noopener noreferrer">this</a> or source your own</p>
                },
                {
                    instructionJsx: <p>Set the <em>background</em> to a colour from your colour scheme</p>
                },
                {
                    instructionJsx: <p>Save these changes and return to the capsule menu. In play mode this time, use the hamburger menu on your capsule tile to expand the size to maximum to see the new tile data.</p>,
                    infoJsx: <p>The size of each tile is a setting individual to each user, so a user can decide to enlarge particular capsule tiles to always see this additional information</p>
                }
            ]
        },
        {
            name: 'Presentations',
            objective: 'Explore how users are able to self-serve using the dashboards you have designed, easily creating interactive presentations without the need for PowerPoint.',
            tasks: [
                {
                    instructionJsx: <p>From the Board button menu, navigate to the <em>Presentations</em> environment</p>,
                    infoJsx: <p>Any user, regardless of licence type, is able to create and edit presentations, based on the capsule reports available to them. These are individual to them but can be shared with other users.</p>
                },
                {
                    instructionJsx: <p>Create a new <em>presentation</em>, giving it the <em>title</em> <code>Sales Quarterly Update</code></p>
                },
                {
                    instructionJsx: <p>Add a new section header slide, to introduce the presentation as an update on Q1 Sales for Andrew Fuller's sales team. Set background and foreground colours as desired.</p>
                },
                {
                    instructionJsx: <p>Add a new slide using one of the dashboard screens created in the Sales Reporting Capsule</p>
                },
                {
                    instructionJsx: <p><em>Reset</em> the <em>screen select</em> on the Day entity and make a selection on Quarter to cover Q1 2021. Make another selection on Area Manager to filter on Andrew Fuller.</p>,
                    infoJsx: <p>Any changes to the default screen selection made within the presentation will be retained when presenting</p>
                },
                {
                    instructionJsx: <p>Add any more screens to the presentation with the same selection, then finish with another section header slide to end the presentation</p>
                },
                {
                    instructionJsx: <p>Click the play icon in the top-right to view the presentation. Click the share icon and share it with BoardUser2, giving them access to edit the presentation.</p>
                }
            ]
        },
        {
            name: 'Security',
            objective: 'Learn how to give users access to your capsule, as well as personalize the reports based on their security access.',
            tasks: [
                {
                    instructionJsx: <p>From the Board button menu, navigate to the <em>system administration</em> environment and go into the <em>profiles</em> tile</p>
                },
                {
                    instructionJsx: <p>Create a new <em>security profile</em> called <code>sales</code>. This will be used for the salespersons to login and view the capsule you created. If you have completed the Data Modelling course, this may already have been done but you will still need to edit it to set the capsule access.</p>
                },
                {
                    instructionJsx: <p>In the <em>license</em> section, assign a <code>lite plus</code> license type for this profile</p>
                },
                {
                    instructionJsx: <p>In the <em>capsules</em> section, grant access to the <code>2.Reporting & Analysis</code> folder only</p>,
                    infoJsx: <p>Access to capsules in granted (or denied) at the folder level, not to individual capsules</p>
                },
                {
                    instructionJsx: <p>In the <em>data models</em> section, assign <code>SALES</code> as the <em>default database security profile</em></p>
                },
                {
                    instructionJsx: <p>Save changes and navigate to <em>users</em>. Create a new <em>user</em> for one of the salespersons, assigning the <code>sales</code> security profile</p>
                },
                {
                    instructionJsx: <p>Set <em>password authentication</em> and type a password for the user</p>
                },
                {
                    instructionJsx: <p>In the <em>select</em> tab, ensure the salesperson can only see data relating to themselves in the Northwind data model</p>
                },
                {
                    instructionJsx: <p>Save changes and <em>logout</em> of Board. <em>Login</em> again using the user for the salesperson you created.</p>
                },
                {
                    instructionJsx: <p>Open the Sales Reporting capsule and observe how the information is now restricted to a subset of customers (those belonging to that salesperson)</p>
                }
            ]
        }
    ]
};