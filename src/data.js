import React from 'react';

const Training = {
    courses: [
        {
            title: 'data-modelling',
            exercises: [
                {
                    name: 'Create New Board Data Model',
                    objective: 'Create a new Board data model as the basis for a new Sales Reporting & Planning application',
                    tasks: [
                        {
                            instructionJsx: <p>Logon to <em>Board</em> using <em>Windows Account</em></p>
                        },
                        {
                            instructionJsx: <p>Navigate to <em>data model</em> and create a new database called <code>Training_[your initials]</code></p>,
                            hintJsx: <p>Click on the + icon to create a new data model</p>
                        },
                        {
                            instructionJsx: <p>Set the <em>from year</em> and <em>to year</em> as <code>2015</code> and <code>2020</code>respectively</p>
                        },
                        {
                            instructionJsx: <p>Enable all of the <em>time range</em> options (Day, Week, Quarter, Fiscal year), leaving additional options for each one as the default setting</p>
                        },
                        {
                            instructionJsx: <p>Save changes to create the data model on the server</p>
                        }
                    ]
                },
                {
                    name: 'Review Northwind Database',
                    objective: 'Explore and understand the relational Northwind database and consider how it might be modelled in Board',
                    tasks: [
                        {
                            instructionJsx: <p>Open <em>SQL Server Management Studio</em> and connect to the server using the saved credentials</p>,
                            hintJsx: <p>A shortcut to open this application is on the Windows taskbar</p>
                        },
                        {
                            instructionJsx: <p>Review the Northwind SQL database schema and data contained within each table</p>,
                            hintJsx: <p>Using <em>Object Explorer</em>, open Databases, NorthwindSQL, Tables and inspect the data in each table by right-clicking on it and choosing <em>Select Top 1000 Rows</em></p>
                        },
                        {
                            instructionJsx: <p>Identify fields from the Northwind SQL database tables that could correspond to Board entities and cubes. Sketch out a diagram to illustrate the relationships between possible entities as a hierarchy. There are many possible valid answers to this diagram.</p>,
                            hintJsx: <p>You will likely need to make some assumptions about the business rules defining the data in the SQl tables.</p>
                        }
                    ]
                },
                {
                    name: 'Configure Entities & Relationships',
                    objective: 'Create the building blocks of a Board data model; the descriptive items of what we would like to analyse our data by and define how they relate to one another',
                    tasks: [
                        {
                            instructionJsx: <p>Return to Board and navigate to <em>Entities</em> in your newly created data model. Click <em>+ entity</em> to create a new entity within it.</p>
                        },
                        {
                            instructionJsx: <p>Create Product entities (<code>Product, Product Group, Product Division</code>) with the <em>group</em> set to <code>Product</code>. Set appropriate <em>code width, desc width and max item number</em> for each.</p>,
                            image: 'product-hierarchy.png',
                            imageAlt: 'Hierarchy diagram showing Product, Product Group and Product Division, each one a parent of the previous one.',
                            hintJsx: <p>The width and max item settings should be made with reference to the data from the SQL tables. Some assumptions should be made on how the entity members might grow in the future.</p>
                        },
                        {
                            instructionJsx: <p>Create Branch entities (<code>Branch, Customer, Branch Country, Customer City, Customer Country, Sales Person, Area Manager</code>) in a group called <code>Branch</code> with appropriate settings.</p>,
                            image: 'branch-hierarchy.png',
                            imageAlt: 'Hierarchy diagram showing Branch, Customer, Customer City, Customer Country as one path. Branch, Customer, Sales Person, Area Manager as another path. Branch, Branch Country as the final path.'
                        },
                        {
                            instructionJsx: <p>Create <code>Shipper</code> entity, with appropriate settings.</p>
                        },
                        {
                            instructionJsx: <p>Navigate to <em>Relationships</em> and configure the relevant hierarchies. Drag a parent entity and drop it onto the appropriate child entity to set the relationship. When finished, remember to click <em>save changes</em>.</p>,
                            hintJsx: <p>Use the diagrams above to inform how the entities are related in each hierarchy</p>
                        }
                    ]
                },
                {
                    name: 'Configure Cubes',
                    objective: 'Create the data model objects that will store the sales measures data at the optimal level of granularity',
                    tasks: [
                        {
                            instructionJsx: <p>Navigate to <em>Cubes</em> within your data model. Click <em>+ cube</em> to create a new cube.</p>,
                        },
                        {
                            instructionJsx: <p>Create a cube named <code>Sales Volume</code>. Assign to a <em>group</em> called <code>Sales</code> and set <em>data type</em> as <code>double</code>. Configure a <em>version</em> with the dimensions Day, Product, Branch and Shipper. Save the cube to create it.</p>
                        },
                        {
                            instructionJsx: <p>Create three more cubes to measure sales. Name them <code>Net Sales</code>, <code>Net Sales at Markdown Price</code>, <code>Net Sales at Std Price</code>. Configure the cubes with all of the same settings as the first one.</p>,
                            hintJsx: <p>Use the <em>copy from</em> button to take all of the settings from the Sales Volume cube</p>
                        }
                    ]
                },
                {
                    name: 'Configure SQL Data Readers for Master Data',
                    objective: 'Connect the Board data model to the data structures maintained in the relational database',
                    tasks: [
                        {
                            instructionJsx: <p>Navigate to <em>Data Reader</em>. Create a new data reader protocol called <code>TREE-Product</code> to load the Product entities, their descriptions and the relationships between them. Assign to a <em>group</em> called <code>Master</code> and select <em>source type</em> as <code>SQL</code></p>
                        },
                        {
                            instructionJsx: <p>Click the connection icon to connect to the Northwind SQL <em>data source</em> and then navigate to <em>mapping</em></p>
                        },
                        {
                            instructionJsx: <p>From the <em>MDB</em> list, drag both <em>code</em> and <em>description</em> elements of each entity in the Product group to the <em>mapping</em> window</p>
                        },
                        {
                            instructionJsx: <p>From the <em>RDB</em> list, drag the corresponding table fields to mapping window. This will construct a SQL query automatically.</p>,
                            hintJsx: <p>The required fields are found in the tables <code>dbo.Product</code> and <code>dbo.Product_Group</code></p>
                        },
                        {
                            instructionJsx: <p>Navigate to <em>join</em> and set the fields on which to join the two tables required for this query</p>,
                            hintJsx: <p>The fields are <code>dbo.Product.c_Productgroup</code> and <code>dbo.Product_Group.c_Productgroup</code></p>
                        },
                        {
                            instructionJsx: <p>Return to mapping and set the <em>mode</em> of each item to allow new items to be added to the entities. Save the data reader.</p>,
                            hintJsx: <p>Code items should be set to <code>append</code> to enable the entity to be filled. Description items can be set to either setting, although <code>replace</code> is usually recommended so descriptions will remain up to date if amended in the data source.</p>
                        },
                        {
                            instructionJsx: <p>Run the TREE-Product data reader and check that the relevant entities and relationships have been populated as expected</p>,
                            hintJsx: <p>Return to entities, click on the name of the entity and navigate to the <em>content</em> tab to inspect the members. For relationships, click on the child, select the parent from the drop-down to inspect the relationships between members of the two entities.</p>
                        },
                        {
                            instructionJsx: <p>Create a new data reader called <code>TREE-Branch</code> to load the Branch entities, their descriptions (excluding the description for Area Manager) and the relationships between them. For the description field of the Sales Person entity, two fields will need to be concatenated. You cannot drag two RDB items to the same mdb item so click to manually type the SQL expression. See the hint for syntax.</p>,
                            hintJsx: <p>The required fields are found in the tables <code>dbo.Customer</code> and <code>dbo.Employee</code>, which should be joined on the common field <code>c_Employee</code>. The syntax to concatenate two fields with a space in between is <code>[field1] + ' ' + [field2]</code>.</p>
                        },
                        {
                            instructionJsx: <p>Run the TREE-Branch data reader and check that the relevant entities and relationships have been populated as expected</p>
                        },
                        {
                            instructionJsx: <p>Create a new data reader called <code>ENT-Area Manager Desc</code> to load the correct descriptions for the Area Manager entity. Ensure that this data reader does not allow new items to be added to the entity but does replace the blank descriptions for members loaded in the TREE-Branch data reader.</p>,
                            hintJsx: <p>The Area Manager names (descriptions) are in the same field as the Sales Person descriptions. The <em>mode</em> of the Area Manager code item should be set to <code>discard</code> so that all the sales person employees are not added as area managers. The mode of the description should be set to <code>replace</code> so the name is added.</p>
                        },
                        {
                            instructionJsx: <p>Create a new data reader called <code>ENT-Shipper</code> to load the Shipper entity and its descriptions</p>,
                            hintJsx: <p>The relevant fields are found in the table <code>dbo.Haulage</code></p>
                        },
                        {
                            instructionJsx: <p>Run the ENT-Area Manager Desc and ENT-Shipper data readers and check the relevant entities have been populated as expected</p>
                        }
                    ]
                },
                {
                    name: 'Configure SQL Data Readers for Transaction Data',
                    objective: 'Connect the Board data model to the transactional data stored in the relational database and calculate the relevant measures',
                    tasks: [
                        {
                            instructionJsx: <p>Create a new SQL data reader called <code>CUBES-Net Sales</code> to load data to the four cubes created previously. Assign this to a group called <code>Transaction</code>.</p>
                        },
                        {
                            instructionJsx: <p>In mapping, drag the cubes one by one to the mapping window. The entities that comprise the dimensions of the cubes will be added automatically.</p>
                        },
                        {
                            instructionJsx: <p>Map the dimensions of the cubes to the appropriate fields in the database tables</p>,
                            hintJsx: <p>The required fields are found in the tables <code>dbo.Orders</code> and <code>dbo.Order_Details</code></p>
                        },
                        {
                            instructionJsx: <p>
                                Calculate the values for each cube by writing the SQL expressions directly into the <em>RDB item</em> field as follows:
                                <ul>
                                    <li>Sales Volume = <code>Order_Details.Amount</code></li>
                                    <li>Net Sales = <code>Order_Details.Amount * Order_Details.UnitPrice * (1 – Order_Details.Discountpc)</code></li>
                                    <li>Net Sales at Markdown Price = <code>Order_Details.Amount * Order_Details.UnitPrice</code></li>
                                    <li>Net Sales at Std Price = <code>Order_Details.Amount * Product.StdPrice</code></li>
                                </ul>
                            </p>
                        },
                        {
                            instructionJsx: <p>Configure the required joins between the three tables</p>,
                            hintJsx: <p>Two joins are required here: <code>OrderKz</code> joins the Orders and Order_Details tables and <code>c_Product</code> joins the Order_Details and Product tables</p>
                        },
                        {
                            instructionJsx: <p>Consider and set the appropriate <em>mode</em> for each item in the data reader, so that any orders containing Products, Branches or Shippers not in the master data are rejected. Ensure that the data reader can be run repeatedly to load the cube with the latest data.</p>,
                            hintJsx: <p>For the entity items in the data reader, reject mode should be used to ensure master data is not affected. For the cube items, replace time slice mode will ensure the cubes are first cleared for the time period being loaded, before latest data is loaded.</p>
                        },
                        {
                            instructionJsx: <p>Save and run the CUBES-Net Sales data reader. Navigate to <em>Logs</em> to check the correct number of records have been read and validated.</p>
                        }
                    ]
                },
                {
                    name: 'Create Capsule Report for Data Validation',
                    objective: 'In order to validate the data being loaded to the Board data model, a basic Board front-end report (known as a capsule) should be created to run queries and test the output',
                    tasks: [
                        {
                            instructionJsx: <p>From the Board button, navigate to <em>Capsules</em> and click on the folder called <code>1.Data Modelling</code></p>
                        },
                        {
                            instructionJsx: <p>Switch to <em>design mode</em> and click <em>+ new</em> to create a new <em>capsule</em></p>,
                            hintJsx: <p>The set square icon in the top-right switches between design and play modes when in the capsule environment</p>
                        },
                        {
                            instructionJsx: <p>Give the capsule the name <code>Data Validation</code>. Expand the <em>more</em> options and under <em>linked data model</em> ensure this is set to your <code>Training_XX</code> data model and then click OK to create the capsule.</p>
                        },
                        {
                            instructionJsx: <p>On the newly created Home <em>screen</em>, drag a new <em>data view</em> object from the <em>toolbox</em> to the workspace</p>,
                            hintJsx: <p>From the left-hand side vertical menu, the toolbox is the second tab</p>
                        },
                        {
                            instructionJsx: <p>On the data view object, click <em>configure me</em> to open the <em>layout</em> designer and configure the data to query and display</p>
                        },
                        {
                            instructionJsx: <p>In the <em>data</em> menu, open the Sales group to reveal the four <em>cubes</em> created previously. Drag each of these one by one to the <em>data</em> area of the layout.</p>
                        },
                        {
                            instructionJsx: <p>Navigate to the <em>entities</em> menu to see a list of all entity groups in the data model. Open the Product group and drag the Product Group entity to the <em>by row</em> section of the <em>axis</em> window. Click save to return to the screen and view the report.</p>
                        },
                        {
                            instructionJsx: <p>Drag a new <em>selector</em> object from the toolbox to the workspace. Click on it to select it and, from the right-hand vertical menu, assign it the Country entity. Interact with it and select one or more countries. Observe the data in the data view updating automatically.</p>
                        },
                        {
                            instructionJsx: <p>In the Data View, double-click on one of the Product Group names to open the <em>drill configuration</em>. Choose Product entity to drill to and inspect the data at a more granular level.</p>
                        }
                    ]
                }
            ]
        },
        {
            title: 'analysis-reporting',
            exercises: [
                {
                    name: 'Data View Basics',
                    objective: 'Create a new capsule and understand the basics of the most important Board object, the Data View. Query data from the Northwind data model to create a basic report.',
                    tasks: [
                        {
                            instructionJsx: <p>In the Reporting & Analysis folder, create a new <em>capsule</em> called <code>Sales Reporting</code>. Ensure the <em>linked data model</em> is <code>Northwind</code>.</p>   
                        },
                        {
                            instructionJsx: <p>Create a new <em>screen</em> named <code>Exercise 1-2</code></p>
                        },
                        {
                            instructionJsx: <p>From the <em>toolbox</em>, drag a <em>data view</em> on to the screen</p>
                        },
                        {
                            instructionJsx: <p>In the <em>layout</em>, configure it with the Net Sales <em>data</em>, showing <em>entities</em> Continent on the <em>row axis</em> and Year on the <em>column axis</em></p>,
                            hintJsx: <p>To access the layout, ensure the data view is selected (border will be highlighted in blue) then click the configure layout icon from the context menu in the top-left of the object or the controls in the menu bar at the top of the screen</p>
                        },
                        {
                            instructionJsx: <p>In <em>axis settings</em>, disable <em>show all</em> on the column axis to hide the years that have no data</p>
                        },
                        {
                            instructionJsx: <p>Save the layout and resize the data view object to fit the data, increasing <em>column widths</em> where necessary</p>,
                            hintJsx: <p>Column widths can be sized by dragging on the data view header, or more accurately by specifying the width in the Columns menu on the right-hand panel</p>
                        },
                        {
                            instructionJsx: <p>Set up a <em>drill down</em> to Country</p>,
                            hintJsx: <p>Double-click on any of the row labels to access the drill configuration.</p>
                        },
                        {
                            instructionJsx: <p>Save the screen, switch to <em>play mode</em> and interact with the report</p>
                        }
                    ]
                },
                {
                    name: 'Grouping Entities',
                    objective: 'Explore how related entities interact with each other in a data view.',
                    tasks: [
                        {
                            instructionJsx: <p><em>Copy</em> the data view from the previous exercise and <em>paste</em> it below on the same screen</p>,
                            hintJsx: <p>Copy and paste controls can be found in the menu bar at the top of the screen or using keyboard shortcuts Ctrl+C and Ctrl + V</p>
                        },
                        {
                            instructionJsx: <p>Add the entity Country to the row axis so that it becomes nested</p>
                        },
                        {
                            instructionJsx: <p>Set the data view to be <em>collapsed</em> by default</p>
                        },
                        {
                            instructionJsx: <p>Add Product Division to the column axis, so it appears above Year</p>
                        },
                        {
                            instructionJsx: <p>Reduce the Net Sales column widths so they fit the object without needing to scroll</p>
                        },
                        {
                            instructionJsx: <p>Position the two data views on screen so they appear tidy and aligned</p>,
                            hintJsx: <p>Try selecting both objects and using the align commands from the menu bar at the top. ALternatively, the position of each object from the left and top of the screen can be set manually in the <em>Position</em> settings in the right-hand menu.</p>
                        },
                        {
                            instructionJsx: <p>Change the drill path of the new data view to drill from Country to City</p>,
                            hintJsx: <p>To change an already configured drill, select a row and click the drill anywhere icon from the data view context menu</p>
                        },
                        {
                            instructionJsx: <p>Save the screen, switch to play mode and interact with the report</p>
                        }
                    ]
                },
                {
                    name: 'Selections & Algorithms',
                    objective: 'Learn how to filter the data from a cube and allow users to do so interactively. Understand how to perform calculations on the data on the fly.',
                    tasks: [
                        {
                            instructionJsx: <p>Create a new screen called <code>Exercise 3</code></p>
                        },
                        {
                            instructionJsx: <p>Make a <em>screen selection</em> on Year for <code>2018</code></p>
                        },
                        {
                            instructionJsx: <p>From the toolbox, add a <em>label</em> with <em>substitution formula</em> <code>@Selection</code> as the <em>caption</em> to display the current selection</p>
                        },
                        {
                            instructionJsx: <p>Create a data view showing Net Sales data with Country on the row</p>
                        },
                        {
                            instructionJsx: <p>Add <em>previous year</em> Net Sales as a second <em>block</em> to your layout</p>,
                            hintJsx: <p>This is an option in <em>time functions</em> of the block configuration</p>
                        },
                        {
                            instructionJsx: <p>Add an <em>algorithm</em> block with <em>header</em> <code>Growth</code> to calculate the growth vs. previous year</p>
                        },
                        {
                            instructionJsx: <p>Add another algorithm block called <code>Growth %</code> to calculate the percentage growth vs. PY, showing 1 <em>decimal digit</em></p>
                        },
                        {
                            instructionJsx: <p>Give the layout the <em>title</em> <code>Sales Growth</code> and save the layout</p>
                        },
                        {
                            instructionJsx: <p>Use <em>block formatting</em> to add a <code>%</code> symbol to the Growth % block. Ensure the decimal digits are maintained at 1 decimal place.</p>,
                            hintJsx: <p>Block format can be found from the data view menu on the right-hand side. Format all the necessary block elements (values and totals). A decimal digits setting of <code>-1</code> ensures the setting is taken from the layout and not overidden by the block format setting.</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>selector</em> for Product Group entity to the screen, with <em>type</em> set to <code>vertical</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>pager</em> for Area Manager entity, ensuring one area manager is always selected</p>,
                            hintJsx: <p>The <em>no all</em> setting forces the pager to always have a member selected</p>
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
                            instructionJsx: <p>Using Exercise 3 as a starting point (use <em>save screen as</em>) create a new screen called <code>Exercise 4</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>timebar</em> to the screen with Month on the axis and Net Sales as the <em>trend line</em></p>
                        },
                        {
                            instructionJsx: <p>Save, switch to play mode and interact with the timebar to narrow the months selected</p>
                        },
                        {
                            instructionJsx: <p><em>Sort</em> the data view rows by Net Sales with the highest values shown first</p>,
                            hintJsx: <p>Sorting is found in the <em>filter</em> tab of the layout data window</p> 
                        },
                        {
                            instructionJsx: <p>Add a <em>ranking function</em> block to display the <em>cumulated vertical %</em> that each country contributes to the total Net Sales</p>,
                            hintJsx: <p>The ranking block needs to be immediately after the block that needs ranking, in this case block a: Net Sales</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>colour alert</em> to the Growth % block to highlight positive growth of more than 5% in green and negative growth of more than 5% in red. Anything in between should remain as is.</p>
                        }
                    ]
                },
                {
                    name: 'Chart Basics',
                    objective: 'Explore the basics of designing a chart object.',
                    tasks: [
                        {
                            instructionJsx: <p>Using Exercise 4 as a starting point, save a new screen called <code>Exercise 5</code></p>
                        },
                        {
                            instructionJsx: <p>Create a <em>cartesian chart</em> and configure the layout with Sales Volume and previous year Sales Volume, with Month on the <em>category axis</em></p>
                        },
                        {
                            instructionJsx: <p>Give the layout the <em>title</em> <code>Sales Volume vs PY</code> and save the layout</p>
                        },
                        {
                            instructionJsx: <p>From the right-hand menu, change the <em>series type</em> for both series from line to <code>bar</code></p>
                        },
                        {
                            instructionJsx: <p>On the <em>primary y-axis</em>, set the <em>decimals</em> shown to <code>0</code></p>
                        },
                        {
                            instructionJsx: <p>Return to the layout, add an algorithm block to the chart to calculate growth rate (calculate as a decimal this time, not a percentage)</p>
                        },
                        {
                            instructionJsx: <p>Set that series to type <code>spline</code> and plot this on the <em>secondary axis</em></p>
                        },
                        {
                            instructionJsx: <p>Show <em>markers</em> and <em>labels</em> for this series and format the secondary axis as a <em>percentage</em></p>
                        },
                        {
                            instructionJsx: <p>Resize and position the <em>plot, title and legend</em>objects within the chart to optimize the display</p>
                        },
                        {
                            instructionJsx: <p>Create a second cartesian chart on screen. Copy the layout from the data view and paste it as the new chart's layout</p>
                        },
                        {
                            instructionJsx: <p>Remove the blocks for Net Sales PY, Growth and Growth %. From <em>axis settings</em>, remove <em>down totals</em>. Change the layout title to <code>Sales by Country</code> and save the layout.</p>
                        },
                        {
                            instructionJsx: <p>In series options, set the Net Sales series to type <code>bar</code>. Leave Cumulated Vertical series as a line but show on the secondary axis.</p>
                        },
                        {
                            instructionJsx: <p>Return to the layout and add Product Division to the <em>series axis</em>. Remove the <em>row totals</em> setting from the Net Sales block. Save the layout.</p> 
                        },
                        {
                            instructionJsx: <p>In series options, set the Net Sales series for each Product Division to series type bar and the Cumulated Vertical series for each Product Division to show on the secondary axis.</p>
                        },
                        {
                            instructionJsx: <p>Set the <em>combine mode</em> of each of the Net Sales series to <code>stack</code></p>
                        },
                        {
                            instructionJsx: <p>Pick a colour for each Product Division and set the <em>series color</em> for both Net Sales and Cumulated Vertial series to that colour</p>
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
                            instructionJsx: <p>Open the <em>screen selection</em> and set a <em>dynamic selection</em> on Year, <em>based on cube</em> Net Sales, using <em>latest period</em></p>
                        },
                        {
                            instructionJsx: <p>Save the screen and navigate to the <em>images</em> section of the capsule. Upload the <em>London.jpg</em> image from the Pictures library.</p>
                        },
                        {
                            instructionJsx: <p>Return to the Home screen, create a <em>label</em> from the toolbox, position in the top-left of the screen and set it to <em>size</em> <code>1920 x 582</code> pixels. Remove the 'label' <em>caption</em>.</p>
                        },
                        {
                            instructionJsx: <p>Set the label <em>background</em> to be the London.jpg image. Set the <em>stretch option</em> to <code>fill</code>.</p>,
                            hintJsx: <p>The background setting is found in the <em>colors</em> menu, where <em>type</em> should be set to <code>image</code></p>
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
                            instructionJsx: <p>In the <em>layout select</em>, make a selection on Product Division <code>Everyday products</code>. Set the layout title as <code>EP Sales (£000s)</code>.</p>
                        },
                        {
                            instructionJsx: <p>Add an <em>algorithm block</em> with header <code>Target</code>, calculated at 20% increase on PY sales</p>,
                            hintJsx: <p><code>b * 1.2</code></p>
                        },
                        {
                            instructionJsx: <p>In the gauge settings of the layout, set the <em>value</em> as the Net Sales block and the <em>max</em> as the Target block. Remove anything set to <em>second or third value</em>.</p>
                        },
                        {
                            instructionJsx: <p>Save the layout and set the gauge <em>background</em> to be transparent so it blends into the screen</p>
                        },
                        {
                            instructionJsx: <p>Copy the gauge object and paste a second one alongside the first</p>
                        },
                        {
                            instructionJsx: <p>Change the layout select and title for this one to display data for <code>Delicacies</code> Product Division</p>
                        },
                        {
                            instructionJsx: <p>Save the screen and navigate to <em>system administration</em>, using the main top-left Board menu. From there, go to <em>theme</em> and upload the Northwind.jpg image to appear as the <em>logo</em> in the banner menu.</p>
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
                            instructionJsx: <p>In <em>creen properties</em>, set the <em>background colour</em> to a colour of your choice and set the <em>screen size</em> to <code>custom</code>, with width and height set to <code>1920 x 820</code></p>
                        },
                        {
                            instructionJsx: <p>Create a label, removing the <em>caption</em> and setting the <em>border color</em> to black or white (depending on whether your screen background is light or dark)</p>
                        },
                        {
                            instructionJsx: <p><em>Position and size</em> the label accurately by setting the <em>top, left, width and height</em> properties according to the wireframe diagram below. Copy and paste the label for each of the seven sections of the wireframe.</p>,
                            image: 'wireframe.png',
                            imageAlt: 'Wireframe of dashboard template with posisition and size settings for each label'
                        },
                        {
                            instructionJsx: <p>Give the three larger area labels a background colour distinct from the screen background colour. Give the four thin labels another distinct background colour.</p>,
                            hintJsx: <p>Different shades of the same colour can look more attraactive than several wildly different colours. To set each group of labels the same colour, hold down Ctrl when clicking to select them to select together. Properties can then be set for all selected objects at once.</p>
                        }
                    ]
                },
                {
                    name: 'Dashboard Design Part 1',
                    objective: 'Create a dashboard to compare the performance between the Product Groups within Northwind. Use a treemap to highlight the sales distribution in a more modern way. Understand how labels can display data and help to keep a consistent look across screens.',
                    tasks: [
                        {
                            instructionJsx: <p>Create a new screen <em>folder</em> called <code>Sales Analysis</code> and create a new <em>screen</em> in that folder called <code>Product Group</code>, setting it to use the Dashboard <em>mask</em></p>
                        },
                        {
                            instructionJsx: <p>Set a <em>dynamic selection</em> on the Day entity, based on cube Net Sales using <em>latest period year-to-date</em></p>
                        },
                        {
                            instructionJsx: <p>Using the mask background as a guide, create a <em>treemap</em> object and position in the top-left tile of the wirefram. Configure the treemap layout to show Net Sales by Product Group.</p>,
                            hintJsx: <p>The mask background will help you position the object by dragging but to position and size it precisely, refer to the settings from the wireframe and set them directly on the object.</p>
                        },
                        {
                            instructionJsx: <p>From the right-hand treemap menu, set the <em>data blocks</em> to use the Net Sales block for both value and colour, which will determine both the size and the colour shading of each rectangle in the treemap. In <em>colors</em> set the <em>color</em> proprty to a colour of your choice for treemap rectangles.</p>
                        },
                        {
                            instructionJsx: <p>Add a label and position on the left-side of the banner tile above the treemap. Set the caption to <code>Sales Distribution</code>. Set the <em>background</em> to transparent and format the font approrpriately to appear as a title to the treemap.</p>
                        },
                        {
                            instructionJsx: <p>Copy the label and paste another one on the right side of the banner tile. Set the caption to <code>Net Sales £</code>. Add a layout to the label to display the total Net Sales. Add an algorithm block to display Net Sales in millions, with the <em>expression</em> set to <code>ROUND(a/1000000,1)&”m”</code>. Set the <em>algorithm type</em> as <code>text</code> and in label settings set block b as the <em>show value</em>.</p>
                        },
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
                            instructionJsx: <p>In the <em>elements</em> menu, hide the title and legend by disabling their <em>visible</em> property</p>
                        },
                        {
                            instructionJsx: <p>Copy and paste the two labels from the treemap banner tile and position them similarly on the cartesian chart banner tile. Change the caption of the title label to <code>Sales vs PY</code> and amend the layout of the right-hand label to calculate and display the total variance between the current and previous years.</p>,
                            hintJsx: <p>The calculation can be performed directly in the text algorithm being displayed or can be calculated in a separate block which can be referred to in text algorithm</p>
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
                            instructionJsx: <p>Add a label positioned on the left side of the banner at the top of the screen, setting the caption with the substitution formula <code>@Product Group</code></p>
                        },
                        {
                            instructionJsx: <p>Save the screen and return to the Product Group screen. Set up a <em>drill to screen</em> action on one or all the objects, with the Product Detail screen as the target.</p>
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
                            instructionJsx: <p>Add a <em>tab container</em> to the screen and set its background colour to transparent</p>
                        },
                        {
                            instructionJsx: <p>Move the data view into the container by <em>copying</em> the data view object, <em>pasting</em> it into the container and then <em>deleting</em> the original</p>
                        },
                        {
                            instructionJsx: <p>Position and size the tab container onto the large tile from the wireframe template. Insert a new <em>geo map</em> object from the toolbox into the container</p>,
                            hintJsx: <p>The tab container must be selected by clicking on it (or use the screen objects menu on the left-hand side) before dragging the new geo map object into it</p>
                        },
                        {
                            instructionJsx: <p>Select the geo map object and configure the layout with the cubes Net Sales, Latitude, Longitude. Set Branch on the <em>markers axis</em>.</p>
                        },
                        {
                            instructionJsx: <p>In the layout geo map settings, open the <em>bubbles</em> options and set the <em>latitude and longitude</em> to the respective data blocks. Save the layout.</p>
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
                            instructionJsx: <p>Copy the geo map from the previous exercise and paste into the same tab container, creating another geo map tab</p>
                        },
                        {
                            instructionJsx: <p>From the geo map right-hand menu, click <em>upload GeoJSON</em>. Navigate to the <em>JSON library</em>, add the <code>world_low</code> JSON and save</p>                                
                        },
                        {
                            instructionJsx: <p>Edit the geo map layout. Remove the Longitude and Latitude blocks. Add an <em>entity block</em> with the Country entity and set the <em>display mode</em> to <code>code</code>. </p>
                        },
                        {
                            instructionJsx: <p>In geo map settings, turn off the <em>bubbles</em> option and activate the <em>map areas</em> option. Set <em>shape name</em> to the Country entity block to match the country codes to the geographical areas defined in the GeoJSON. Set the <em>color</em> setting to the Variance algorithm block.</p>
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
                            instructionJsx: <p>On the data view layout, change the axis to Branch and <em>sort</em> by Margin <em>descending</em> and <em>keep top</em> 20 branches.</p>,
                            hintJsx: <p>For sorting, navigate to the <em>filter</em> tab of the data configuration in the layout</p>
                        },
                        {
                            instructionJsx: <p></p>
                        },
                        {
                            instructionJsx: <p></p>
                        },
                        {
                            instructionJsx: <p></p>
                        },
                        {
                            instructionJsx: <p></p>
                        },
                        {
                            instructionJsx: <p></p>
                        },
                    ]
                }
            ]
        },
        {
            title: 'planning-procedures',
            exercises: [
                {
                    name: 'Hierarchy Loading',
                    objective: 'Implement a process for the application administrator to be able to load and manage the data model’s hierarchies from the Board front-end',
                    tasks: [
                        {
                            instructionJsx: <p>Open the Sales Planning <em>capsule</em> and go to the <code>Data Loading</code> screen</p>
                        },
                        {
                            instructionJsx: <p>Open the <em>data model</em>, go to <em>procedures</em> and create a new <em>procedure</em> called <code>01.1 Load Hierarchies</code>
                            </p>,
                            hintJsx: <p>Open another browser tab for navigating to data model to make it easier to switch between capsule and data model)</p>
                        },
                        {
                            instructionJsx: <p>Add an <em>action</em> to run the <em>SQL data reader protocol</em> <code>TREE – Product</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>refresh screen</em> step at the end of the procedure (NOTE most procedures will require this step at the end – the instructions after this exercise will not explicitly state this each time!)</p>
                        },
                        {
                            instructionJsx: <p>Return to the Data Loading screen and set the Load Hierarchies <em>button</em> to run the procedure</p>
                        },
                        {
                            instructionJsx: <p>Switch to <em>play mode</em> and click the button to run the procedure. Note that one new Product and one new Customer are added.</p>
                        },
                        {
                            instructionJsx: <p>Go back to the data model, go to <em>relationships</em> and click <em>analyze</em>. Note that the new Product is missing a Product Category and the new Branch and Customer is missing the Continent.</p>
                        },
                        {
                            instructionJsx: <p>Continent does not come from the source data but can be derived from the Country of the new Customer. A <em>normalize</em> action will perform this. Check in the normalize options that the Branch to Continent and Customer to Continent options are checked.</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>normalize</em> action on the Branch hierarchy to the procedure</p>
                        },
                        {
                            instructionJsx: <p>For the Product Category, go to screen <code>Admin</code>. The new Product should be highlighted as missing a category.</p>
                        },
                        {
                            instructionJsx: <p>Edit the <em>layout</em> of the <em>data view</em> and enable <em>data entry</em> on the Product Category <em>block</em>. This will allow users to set the relationship.</p>
                        },
                        {
                            instructionJsx: <p>Return to play mode and set the missing Product Category to <code>New</code></p>
                        },
                        {
                            instructionJsx: <p>Return to the Data Loading screen, rerun the procedure. Rerun analyze relationships action and check that the missing parents are now resolved.</p>
                        }
                    ]
                }
            ]
        }
    ]
}

export default Training;