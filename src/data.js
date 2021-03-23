import React from 'react';

/* Data map is as follows
courses - array of course objects
    title - title of the course (string)
    exercises - array of exercise objects for the course
        name - name of the exercise (string)
        objective - brief description of the point of the exercise (string)
        tasks - array of task objects for the exercise
            instructionJsx - written instruction for carrying out the task (JSX)
            hintJsx - text for a hint that will be hidden until the user clicks to reveal it (JSX)
            infoJsx - text for additional information that is not necessary for the task but useful incidentally (JSX)
                NOTE the above Jsx properties are usually wrapped in <p> tags but can be wrapped in <div> tags to use other JSX elements such as <ul>
                NOTE use tag <em> to highlight specific terminology and <code> for formulas and specific inputs 
            image - filename of an image to be displayed, must be placed in public/img (string)
            imageAlt - alt text for the image (string)
            inputCaption - caption for an input box, presence of this will automatically generate a numerical input (string)
            answer - correct answer for the input (number)
*/

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
                            instructionJsx: <p>Set the <em>from year</em> and <em>to year</em> as <code>2017</code> and <code>2022</code> respectively</p>
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
                            instructionJsx: <p>Create Product entities (<code>Product</code>, <code>Product Group</code>, <code>Product Division</code>) with the <em>group</em> set to <code>Product</code>. Set appropriate <em>code width, desc width and max item number</em> for each.</p>,
                            image: 'product-hierarchy.png',
                            imageAlt: 'Hierarchy diagram showing Product, Product Group and Product Division, each one a parent of the previous one.',
                            hintJsx: <p>The width and max item settings should be made with reference to the data from the SQL tables. Some assumptions should be made on how the entity members might grow in the future.</p>
                        },
                        {
                            instructionJsx: <p>Create Branch entities (<code>Branch</code>, <code>Customer</code>, <code>Branch Country</code>, <code>Customer City</code>, <code>Customer Country</code>, <code>Sales Person</code>, <code>Area Manager</code>) in a group called <code>Branch</code> with appropriate settings.</p>,
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
                            hintJsx: <p>Code items should be set to <code>add new item</code> to enable the entity to be filled. Description items can be set to either setting, although <code>replace</code> is usually recommended so descriptions will remain up to date if amended in the data source.</p>
                        },
                        {
                            instructionJsx: <p><em>Run</em> the TREE-Product data reader and check that the relevant entities and relationships have been populated as expected</p>,
                            hintJsx: <p>Return to entities, click on the name of the entity and navigate to the <em>content</em> tab to inspect the members. For relationships, click on the child, select the parent from the drop-down to inspect the relationships between members of the two entities.</p>
                        },
                        {
                            instructionJsx: <p>Create a new data reader called <code>TREE-Branch</code> to load the Branch entities, their descriptions (excluding the description for Area Manager) and the relationships between them. For the description field of the Sales Person entity, two fields will need to be concatenated. You cannot drag two RDB items to the same MDB item so click to manually type the SQL expression. See the hint for syntax.</p>,
                            hintJsx: <p>The required fields are found in the tables <code>dbo.Customer</code> and <code>dbo.Employee</code>, which should be joined on the common field <code>c_Employee</code>. The syntax to concatenate two fields with a space in between is <code>[field1] + ' ' + [field2]</code>.</p>
                        },
                        {
                            instructionJsx: <p>Run the TREE-Branch data reader and check that the relevant entities and relationships have been populated as expected</p>
                        },
                        {
                            instructionJsx: <p>Create a new data reader called <code>ENT-Area Manager Desc</code> to load the correct descriptions for the Area Manager entity. Ensure that this data reader does not allow new items to be added to the entity but does replace the blank descriptions for members loaded in the TREE-Branch data reader.</p>,
                            hintJsx: <p>The Area Manager names (descriptions) are in the same field as the Sales Person descriptions. The <em>mode</em> of the Area Manager code item should be set to <code>discard new item</code> so that all the sales person employees are not added as area managers. The mode of the description should be set to <code>replace</code> so the name is added.</p>
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
                            instructionJsx: 
                                <div>
                                    <p>Calculate the values for each cube by writing the SQL expressions directly into the <em>RDB item</em> field as follows:</p>
                                    <ul>
                                        <li>Sales Volume = <code>Order_Details.Amount</code></li>
                                        <li>Net Sales = <code>Order_Details.Amount * Order_Details.UnitPrice * (1 – Order_Details.Discountpc)</code></li>
                                        <li>Net Sales at Markdown Price = <code>Order_Details.Amount * Order_Details.UnitPrice</code></li>
                                        <li>Net Sales at Std Price = <code>Order_Details.Amount * Product.StdPrice</code></li>
                                    </ul>
                                </div>
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
                            instructionJsx: <p>Drag a new <em>selector</em> object from the toolbox to the workspace. Click on it to select it and, from the right-hand vertical menu, assign it the Customer Country entity. Interact with it and select one or more countries. Observe the data in the data view updating automatically.</p>
                        },
                        {
                            instructionJsx: <p>In the data view, double-click on one of the Product Group names to open the <em>drill configuration</em>. Choose Product entity to drill to and inspect the data at a more granular level.</p>
                        }
                    ]
                },
                {
                    name: 'Create Order Count Cube',
                    objective: 'Cubes can be used to measure data (sales in this case) in many ways. While the cubes created previously measured individual units sold and the revenue generated, it may also be useful to measure the number of distinct orders made by the customers.',
                    tasks: [
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new cube called <code>Order Count</code> with the following attributes:</p>
                                    <ul>
                                        <li>Group: Sales</li>
                                        <li>Data Type: Single</li>
                                        <li>Dimensions: Day, Branch</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Create a new data reader called <code>CUBE-Order Count</code> to load data to this cube from the dbo.Orders table</p>
                        },
                        {
                            instructionJsx: <p>Map the Day and Branch dimensions to the relevant table fields</p>,
                            hintJsx: <p>Both OrderDate and Delivery would be valid choices for the Day field, depending on when the order should be counted for the purpose of this analysis</p>
                        },
                        {
                            instructionJsx: <p>For the cube value field, hard code a <code>1</code> into the query, ensuring that each record is effectively counted in the cube</p>
                        },
                        {
                            instructionJsx: <p>Save and run the data reader. Return to the Data Validation capsule and add a new data view object to the screen to check this data has loaded as expected.</p>
                        }
                    ]
                },
                {
                    name: 'Configure a Text File Data Reader',
                    objective: 'Data can be loaded to a Board data model from a variety of sources. Data from the company HR system has been sent as a text file. This can be brought in to enhance the data model and reveal more about the sales data.',
                    tasks: [
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new cube called <code>Working Hours</code> with the following attributes:</p>
                                    <ul>
                                        <li>Group: HR</li>
                                        <li>Data Type: Single</li>
                                        <li>Dimensions: Month, Sales Person</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Create a new data reader called <code>CUBE-Working Hours</code> with <em>source type</em> set to <code>text file</code></p>
                        },
                        {
                            instructionJsx: <p>Set the <em>source folder/URL</em> with <em>path</em> <code>C:\Board\Dataset\DB Training</code> and <em>pattern</em> <code>Working hours*.csv</code>. Set the <em>CSV delimiter</em> to <code>,</code>. The file should appear in the list, click the connection icon to connect to it.</p>
                        },
                        {
                            instructionJsx: <p>Navigate to the <em>mapping</em> step and map the fields in the text file to the Working Hours cube and its dimensions</p>
                        },
                        {
                            instructionJsx: <p>Save the data reader and run it on the <code>Working Hours per Salesperson.csv</code> file</p>,
                            hintJsx: <p>To run a text file data reader, first select the file from the drop-down list in the <em>file</em> column from the relevant data reader, then select the data reader and click <em>run</em></p>
                        },
                        {
                            instructionJsx: <p>Check the data has loaded as expected in the Data Validation capsule</p>
                        }
                    ]
                },
                {
                    name: 'Build a Custom Time Entity using ETL',
                    objective: 'Board’s out-of-the-box time entities can be customized to provide additional analysis. In order to allow reporting of sales by day of the week, an additional time entity can be configured. The ETL functionality of the data reader will be used to automate this process by performing transformations on the inputs from a text file.',
                    tasks: [
                        {
                            instructionJsx: <p>In your data model, navigate to <em>time range</em> and go to <em>custom entities</em></p>
                        },
                        {
                            instructionJsx: <p>Select <code>_Time1</code> entity and rename it to <code>Weekday</code>. Set the <em>code width</em> to <code>1</code> and the <em>max item number</em> to <code>7</code> and save changes.</p>
                        },
                        {
                            instructionJsx: <p>Go back to time range settings and navigate to <em>custom relationships</em>. Set Weekday as a <em>parent</em> of Day and save changes.</p>
                        },
                        {
                            instructionJsx: <p>Return to custom entities. Select the Weekday entity again and navigate to <em>content</em> and then <em>add new member</em></p>
                        },
                        {
                            instructionJsx: <p>Manually add members for the seven days of the week, with codes as numbers <code>1, 2... 7</code> and descriptions as <code>Monday, Tuesday ... Sunday</code>, then save the added members</p>
                        },
                        {
                            instructionJsx: <p>Click on the Day entity and <em>extract</em> it – this will output it to a text file on the server</p>
                        },
                        {
                            instructionJsx: <p>Create a new text file data reader called <code>REL-Day to Weekday</code>. Connect to the extracted Day entity text file, <code>A007.csv</code>, and navigate to <em>mapping</em>. Map both the Day and Weekday entities to the first field in the file (Day).</p>,
                            hintJsx: <p>Only the code fields of the entities are needed for mapping relationships</p>
                        },
                        {
                            instructionJsx: <p>Navigate to <em>ETL</em>. Enable <em>show formulas</em> to transform the data before loading. In cell D4 (file output for loading to Weekday entity) write the formula <code>=WEEKDAY(C4,2)</code>. This function will translate the date from the extracted Day entity into a number representing the day of the week running Monday to Sunday.</p>
                        },
                        {
                            instructionJsx: <p>Disable <em>show formulas</em> to check a number from 1-7 is returned. Page through the rows of the file to check some other dates.</p>
                        },
                        {
                            instructionJsx: <p>Save the data reader and run it on the <code>A007.csv</code> file</p>
                        },
                        {
                            instructionJsx: <p>Check the custom relationships again to validate that each member of Day has a corresponding Weekday</p>
                        },
                        {
                            instructionJsx: <p>In the Data Validation capsule, use the Weekday entity in a data view to ensure the data is analysed as expected</p>
                        }
                    ]
                },
                {
                    name: 'Modify the Data Model',
                    objective: 'So far, the entity hierarchy has been built with reference to the underlying data structures in the Northwind SQL database. These hierarchies can be customized with new analysis paths that may not exist in source data. This exercise will add additional analysis on the Product and Branch hierarchies.',
                    tasks: [
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new <em>entity</em> called <code>Product Category</code> with the following attributes:</p>
                                    <ul>
                                        <li>Group: Product</li>
                                        <li>Code width: 2</li>
                                        <li>Desc width: 10</li>
                                        <li>Max item no.: 5</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Manually populate the entity with two members: <code>Existing</code> and <code>New</code></p>,
                            hintJsx: <p>Navigate to <em>content</em> and <em>add new members</em>. You will need to choose a code for each member, e.g. E for Existing and N for New.</p>
                        },
                        {
                            instructionJsx: <p>Set Product Category to be a direct <em>parent</em> of Product and save changes</p>,
                            hintJsx: <p>Navigate to <em>relationships</em> and drag the relevant parent onto the child</p>
                        },
                        {
                            instructionJsx: <p>In the Data Validation capsule, create a data view with Product Category on the axis. Note that no data is shown as the relationships for each Product have not been set, so cannot yet be summarized by Product Category.</p>
                        },
                        {
                            instructionJsx: <p>Return to relationships in the data model and run the <em>analyze</em> function. Note that there are missing relationships between Product and Product Category. Click on the row for <em>missing parent</em>.</p>
                        },
                        {
                            instructionJsx: <p>All members of Product with no assigned Product Category are shown (currently all of them as the relationship was just created). As all products currently in the entity have been sold at some point, they should all be assigned to <code>Existing</code>. Click <em>default</em> to assign all missing relations to a particular parent member.</p>
                        },
                        {
                            instructionJsx: <p><em>Refresh</em> the data view in the capsule and check that data is shown for the <code>Existing</code> Product Category</p>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>entity</em> called <code>Continent</code> with the following attributes:</p>
                                    <ul>
                                        <li>Group: Branch</li>
                                        <li>Code width: 2</li>
                                        <li>Desc width: 30</li>
                                        <li>Max item no.: 10</li>
                                    </ul>
                                </div> 
                        },
                        {
                            instructionJsx: <p>Manually populate the entity with three members: <code>Europe</code>, <code>North & Central America</code>, <code>South America</code></p>
                        },
                        {
                            instructionJsx: <p>Set Continent to be a direct <em>parent</em> of Customer Country, in the Branch hierarchy</p>
                        },
                        {
                            instructionJsx: <p>View the relationship between Customer Country and Continent (child to parent). Manually set the correct parent for a few of the members of Customer Country.</p>,
                            hintJsx: <p>To view the relationships, click on Customer Country, then from the <em>related with</em> drop-down select Continent. Click on the name of a country to set the continent.</p>
                        },
                        {
                            instructionJsx: <p>To speed this process up, view the relationship between Continent and Customer Country (parent to child). Select a member of Continent and choose all the members of Customer Country that belong to it.</p>
                        },
                        {
                            instructionJsx: <p>In the Data Validation capsule, create a data view with Continent on the axis. Note that no data is shown.</p>
                        },
                        {
                            instructionJsx: <p>In relationships, run the <em>analyze</em> function again. Note that although the Customer Country to Continent relationships have been set, all other relationships to Continent within the Branch hierarchy are still missing.</p>
                        },
                        {
                            instructionJsx: <p>Open the <em>normalize</em> configuration and enable the <em>do</em> option for all indirect relationships to Continent (Branch, Customer and Customer City). Ensure the <em>through</em> option for each is set to Customer Country, so the relationship is normalized using the relationship that has now been set manually. <em>Save</em> the settings, then click <em>go</em> to run the process.</p>
                        },
                        {
                            instructionJsx: <p>Run the analyze function again to verify that all issues in the Branch hierarchy are resolved</p>
                        },
                        {
                            instructionJsx: <p>Refresh the data view in the capsule to check the report now displays data by Continent as expected</p>
                        }
                    ]
                },
                {
                    name: 'Configure Sparsity',
                    objective: 'Sparsity is a concept within Board that allows for more efficient storage of data within a data model and, as a result, significantly faster query and data processing times. Sparsity can be set on the sales cubes to optimise this data model.',
                    tasks: [
                        {
                            instructionJsx: <p>Modify the existing <em>version</em> of the Net Sales cube by flagging the Product and Branch dimensions as <em>sparse</em></p>,
                            hintJsx: <p>Click on the cube name, navigate to <em>versions</em> then click on the tick mark for the dimensions to flag as sparse. This will change the tick to an S, to indicate a sparse dimension.</p>
                        },
                        {
                            instructionJsx: <p>On saving the changes, this action will clear all data from the cube. Rerun the relevant data reader to reload it from the SQL database.</p>
                        },
                        {
                            instructionJsx: <p>Return to cubes, note that the <em>file size</em> of the cube is now smaller than the other cubes loaded from the same source</p>
                        },
                        {
                            instructionJsx: <p>Click on the Net Sales cube and navigate to <em>analysis</em>. Click on <em>sparsity</em> to discover how many combinations of the Product-Branch sparsity are open in the data model (i.e. have received data from the data reader).</p>
                        },
                        {
                            instructionJsx: <p>Calculate the <em>density</em> of this combination by dividing the open combinations by the total possible combinations of Product and Branch</p>,
                            hintJsx: <p><code>Open combinations / (Product item number * Branch item number)</code></p>
                        }
                    ]
                },
                {
                    name: 'Configure Secondary Versions',
                    objective: 'Cube versions allow data in numerical cubes to be pre-aggregated and the data stored a more summarized level, improving query times on commonly used reports. The sales cubes in this data model are defined at a very detailed level, so secondary versions would optimize it for high-level reporting.',
                    tasks: [
                        {
                            instructionJsx: <p>Add a second <em>version</em> to the Sales Volume cube to pre-aggregate the data at a commonly used level: <code>Month</code>, <code>Product Group</code>, <code>Customer Country</code></p>,
                            hintJsx: <p>Click on the cube name, navigate to <em>versions</em> then click <code>+</code> to create a new cube version, defining the dimensions in the normal way</p>
                        },
                        {
                            instructionJsx: <p>In the Data Validation capsule, configure a data view showing the Sales Volume data at this aggregated level, or a more aggregated level. Note that no data is returned. This is because the second version has not been populated with data.</p>,
                            hintJsx: <p>Set any of Month, Product Group and Customer Country on the axes, or any of their parents such as Year or Product Division</p>
                        },
                        {
                            instructionJsx: <p>Amend the data view layout to use a dimension more granular than used in the second cube version (e.g. Customer City instead of Customer Country). Note that data is now returned – Board automatically picks the appropriate version for the layout configuration.</p>
                        },
                        {
                            instructionJsx: <p>Return to the Sales Volume cube in the data model. In the <em>properties</em> tab, open the <em>versions</em> list to see the stored versions. Click <em>verify</em> to confirm that the second version has no data (<em>checksum</em> will show the total of all values stored in a cube version).</p>
                        },
                        {
                            instructionJsx: <p>On the second version, run the <em>align</em> process to pre-aggregate data from the primary version and store it in the secondary version</p>
                        },
                        {
                            instructionJsx: <p>Retry the data view at the aggregate level to verify data now comes through using the second cube version</p>
                        }    
                    ]
                },
                {
                    name: 'Create a Sales Report with Rules',
                    objective: 'Rules can be defined in a data model to allow specific calculations to be applied within an entity. Setting these up can allow for specific business rules to be applied uniformly across a reporting suite. In this exercise, a simple sales report will be set-up in two different ways; first through front-end algorithms and then through back-end based rules. This will show how business logic can be applied at different stages of the application build.',
                    tasks: [
                        {
                            instructionJsx: <p>In the Data Validation capsule, create a new <em>screen</em> called <code>Sales Report</code></p>,
                            hintJsx: <p>From the capsule explorer menu on the left-hand side, click the hamburger icon next to <em>screens</em> and click <em>add screen</em></p>
                        },
                        {
                            instructionJsx: <p>From the hamburger menu in the top-right of the screen, navigate to the screen <em>select</em> and make a selection on the Year entity for <code>2021</code></p>
                        },
                        {
                            instructionJsx: 
                            <div>
                                <p>Create a new data view and configure the layout with the following data blocks:</p>
                                <ul>
                                    <li>Net Sales at Std Price</li>
                                    <li>Net Sales at Markdown Price</li>
                                    <li>Net Sales</li>
                                </ul>
                            </div>
                        },
                        {
                            instructionJsx:
                            <div>
                                <p>Add the following blocks using an <em>algorithm</em> to calculate the results. The formulas should refer to other data blocks by the letter shown. Write the name of the measure in the <em>header</em> field on the right-hand configuration menu.</p>
                                <ul>
                                    <li>Markdown = <code>Net Sales at Std Price - Net Sales at Markdown Price</code></li>
                                    <li>Discount = <code>Net Sales at Markdown Price - Net Sales</code></li>
                                    <li>Total Deduction = <code>Markdown + Discount</code></li>
                                    <li>Total Deduction % = <code>Total Deduction / Net Sales at Std Price * 100</code></li>
                                </ul>
                            </div>,
                            hintJsx: <p>To add an algorithm block, click the <em>+</em> at the bottom of the data blocks list and then click the <em>fx</em> icon. Enter the formula first then click on tick to insert, e.g. for Markdown it would be <code>a-b</code>. Enter the header in the right-hand side menu and click <em>apply</em> to update.</p> 
                        },
                        {
                            instructionJsx: <p>Set Quarter entity on the <em>column axis</em>. In <em>data view settings</em> (just above the preview), set the <em>blocks alignment</em> to <code>vertically</code>. Save the layout to view the report.</p>
                        },
                        {
                            instructionJsx: <p>With the data view object selected, click on <em>block format</em> from the right-hand side menu. Apply some formatting to the report, such as showing the Total Deduction line in bold and showing a % symbol after the values in Total Deduction % and/or showing these values to 1 decimal place.</p>,
                            hintJsx: <p>In block format configuration, first click on the element of the report to format, then select the formatting settings from the right-hand side menu.</p>
                        },
                        {
                            instructionJsx: <p>Save the screen and return to the data model. Create a new <em>entity</em> called <code>Sales Report Line</code>. Manually populate the members to mimic the seven blocks created in the data view (i.e. Net Sales at Std Price etc...)</p>,
                            hintJsx: <p>Decide on how you will code the members before setting the attributes of the entity such as code width.</p>
                        },
                        {
                            instructionJsx: <p>Create a new <em>cube</em> called <code>Sales Report</code>. This should be configured with all the same attributes as the Net Sales cube but with an additional dimension of the Sales Report Line entity.</p>
                        },
                        {
                            instructionJsx: <p>Configure three new <em>data readers</em> to load this cube. These should mirror the original <code>CUBES-Net Sales</code> data reader but with each of the three net sales measures calculated in its own data reader. Map the calculation to the correct slice of the Sales Report Line dimension by hard coding the code for that entity slice into the data reader query.</p>,
                            hintJsx: <p>Map the Day, Branch, Product and Shipper dimensions to the same fields as before. Refer to the original CUBES-Net Sales data reader for the formulas for each measure. To hard-code, type the code for the Sales Report Line entity slice into the RDB item field, in quote mark, e.g. <code>'01'</code></p>
                        },
                        {
                            instructionJsx: <p>Consider the <em>mode</em> that should be used in these data readers. When multiple data readers load to the same cube, <code>replace time slice</code> option will always clear data from the previous data reader if it relates to the same time period (even if it is loading a different slice on another dimension).</p>,
                            hintJsx: <p>One option here would be to set <code>replace time slice</code> on one fo three data readers and set <code>add</code> on the other two. They would need to be run in the correct order so that the replace one runs first, clearing data from a previous load, then the other two run without clearing.</p>
                        },
                        {
                            instructionJsx: <p>Run the three data readers and verify the correct number of records were loaded.</p>
                        },
                        {
                            instructionJsx: <p>Return to the Sales Report screen in the capsule. Add a new data view, configured with the Sales Report cube data, Sales Report Line entity on the <em>row axis</em> and Quarter on the <em>column axis</em>. In <em>axis settings</em>, disable the option <em>down totals</em>. Save the layout. This report should now mirror part of the report from the first data view.</p>
                        },
                        {
                            instructionJsx: <p>In the data model, navigate to <em>Rules</em>. Create a new <em>rule</em> called <code>Sales Report Calcs</code>, setting it to the Sales Report Line <em>entity</em>.</p>
                        },
                        {
                            instructionJsx: <p>Write the correct formulas to calculate Markdown, Discount, Total Deduction and Total Deduction %. Formulas can refer to other members of the Sales Report Line entity by putting their codes in square brackets e.g. <code>[01] – [02]</code>. The net sales lines should be left empty. Save changes when done.</p>
                        },
                        {
                            instructionJsx: <p>In the data view layout, click on the Net Sales data block and from the right-hand configuration menu, apply this new rule to it. The values in the report should now match the first data view.</p>,
                            hintJsx: <p>To apply the rule, activate the <em>rules</em> option from the right-hand menu and choose the rule to apply from the drop-down</p>
                        },
                        {
                            instructionJsx: <p>In the data model, navigate to <em>Format</em>. Create a new <em>template</em> called <code>Sales Report</code> on the Sales Report Line entity.</p>
                        },
                        {
                            instructionJsx: <p>Apply the desired formatting options to the report (similarly to the block formatting in the first data view)</p>
                        },
                        {
                            instructionJsx: <p>In the screen, click on the data view and under <em>templates</em> from the right-hand side configuration, apply the Sales Report template</p>
                        }
                    ]
                },
                {
                    name: 'Enhance the Report with Offset Rule',
                    objective: 'Within a rule, a formula for a particular entity member cannot refer to the data held in a cube for that same entity member. This can however be achieved by using a technique called the offset rule. In this exercise, the report from the previous one will be enhanced using this technique.',
                    tasks: [
                        {
                            instructionJsx: <p>Create a new rule called <code>Sales Report (% Net Sales at Std Price)</code>, setting it to the Sales Report Line entity</p>
                        },
                        {
                            instructionJsx: <p>For each row, write a formula that expresses each measure as a percentage of the Net Sales at Std Price. Ignore the first row (Net Sales at Std Price) as this will always calculate to 100%. Also ignore the last row (Total Price Deduction %) as it is already performing this calculation in the original rule.</p>,
                            hintJsx: <p>The formula for Net Sales at Markdown Price would be <code>Net Sales at Markdown Price / Net Sales at Std Price * 100</code>. The code of each measure should be written in square brackets.</p>
                        },
                        {
                            instructionJsx: <p>A rule formula referencing itself would create a circular reference, so an offset is required to refer the formula to the previous block in the layout. Add a <code>.</code> before each code reference in the formula but inside the square bracket e.g. <code>[.02]</code>. Save the rule.</p>,
                            hintJsx: <p>Assuming the code for Net Sales at Std Price is <code>01</code> and the code for Net Sales at Markdown Price is <code>02</code>, the formula for Net Sales at Markdown Price should be <code>[.02]/[.01]*100</code></p>
                        },
                        {
                            instructionJsx: <p>In the Sales Report screen, edit the layout of the second data view, adding a second block with the Sales Report cube as data.</p>
                        },
                        {
                            instructionJsx: <p>Apply the Sales Report (% Net Sales at Std Price) rule to this block. The calculations will then be made using the results of the first Sales Report block. For the row totals of this block to be correct, enable the option <em>apply on totals</em> within the rule configuration. Set the header of this block to <code>%</code> to indicate what is being displayed.</p>
                        },
                        {
                            instructionJsx: <p>The first row (Net Sales at Std Price) is simply displaying the value from the cube, repeating the value from the first column. To remove this, return to the rule and enter a <code>0</code> as the formula.</p>
                        }
                    ]
                },
                {
                    name: 'Use Cubes More Efficiently with Data Picker',
                    objective: 'An advanced functionality of rules is called the data picker, which allows the formulas to not only reference other entity members but also specific cubes. This exercise shows how this can be used to remove the need for loading duplicate data performed into the Sales Report cube.',
                    tasks: [
                        {
                            instructionJsx: <p>Create a new rule called <code>Sales Report Calcs (Data Picker)</code>, setting it to the Sales Report Line entity.</p>
                        },
                        {
                            instructionJsx: <p>Click on the Sales Report Calcs rule and <em>export</em> it. This will download a file to the client machine.</p>
                        },
                        {
                            instructionJsx: <p>Go back to the Data Picker rule and <em>import</em> the file. The formulas from the Sales Report Calcs rule should now be present.</p>
                        },
                        {
                            instructionJsx: <p>For the first three rows (Net Sales at Std Price, Net Sales at Markdown Price etc) enter a <em>data picker</em> formula to refer to the original cube that contains each measure. The formula should begin with <code>@</code> and then contain the <em>physical name</em> of the cube in square brackets, e.g. <code>@[V001]</code>. Navigate to cubes to check the physical name for each cube. When done, save the rule.</p>
                        },
                        {
                            instructionJsx: <p>In the Sales Report screen, edit the layout of the second data view, applying the Data Picker rule to the first Sales Report block instead of the original Sales Report Calcs rule. The data in the report should remain unchanged.</p>
                        },
                        {
                            instructionJsx: <p>Even though the data view is referencing the Sales Report cube, the data is now coming from the original Net Sales cubes. In the data model, run a <em>clear</em> action on the Sales Report cube. Refresh the data view to verify the data remains in the report.</p>
                        }
                    ]
                },
                {
                    name: 'Enable Drill Through Directly to the Data Source',
                    objective: 'Configuring a drill through protocol can allow end users to access specific data held in a source database, without leaving Board to login to another system. In this exercise, a protocol will be configured to allow users to drill from any report by Branch (or related entities) to obtain a list of orders, and useful information about them such as their delivery dates and the customer contact.',
                    tasks: [
                        {
                            instructionJsx: <p>In the data model, navigate to <em>Drill Through</em>. Create a new drill through protocol called <code>Order Details</code>, connecting to the Northwind SQL database.</p>
                        },
                        {
                            instructionJsx: <p>Map the dimensions that users should be able to drill to, Month and Branch. Map them to the relevant fields in the dbo.Orders table.</p>,
                            hintJsx: <p>The OrderDate field in dbo.Orders can easily be mapped to the Month entity; the SQL to convert the date to a the relevant month is automatically generated.</p>
                        },
                        {
                            instructionJsx: <p>Add <em>generic fields</em> (under <em>more</em> in the MDB list) to bring additional information into the drill. The first one should be <code>dbo.Orders.OrderKz</code> to allow users to view individual orders within the drill. Add any more fields that could be useful. These fields can be from other tables, remembering to <em>join</em> these tables correctly.</p>,
                            hintJsx: <p>For example, <code>dbo.Orders.Delivery</code>, <code>dbo.Customers.ContactName</code> and <code>dbo.Customers.ContactPosition</code> could be useful to allow users to contact their customer about an order</p>
                        },
                        {
                            instructionJsx: <p>In the Data Validation capsule, create a data view showing Net Sales with Branch on the row axis. Configure a drill on one of the rows, selecting the <em>drill through</em> option and the Order Details protocol. Make a <em>selection</em> on the Year entity and execute the drill to verify it works as expected (showing orders for that Branch and Year only).</p>
                        },
                        {
                            instructionJsx: <p>In the data model, edit the Order Details protocol. Enable <em>manual</em> mode in the query designer. Add an alias to each field to improve the presentation to the user. After each field name in the <em>SELECT statement</em>, add the keyword <code>AS</code> and the new name for the field in quotes, e.g. <code>dbo.Orders.OrderKz AS ‘Order Ref’</code>. This will display the alias as the column header. Save the protocol.</p>
                        },
                        {
                            instructionJsx: <p>Rerun the drill through from the data view to see the new field headers.</p>
                        }
                    ]
                },
                {
                    name: 'Configure a ROLAP Cube for Real-Time Stock Updates',
                    objective: 'Cubes in Board are generally created as MDB cubes, meaning their data is stored within the Board multidimensional database for fast querying. They can also be configured as RDB cubes, meaning only their structure is stored within Board and the data is queried from an external data source in real time whenever a user runs a report. In this exercise, an RDB or ROLAP cube will be configured to report current stock levels of each product, ensuring the user is always seeing the live position.',
                    tasks: [
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new cube called <code>Stock</code> with the following attributes:</p>
                                    <ul>
                                        <li>Group: Stock</li>
                                        <li>Data Type: Single</li>
                                        <li>Dimensions: Product</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>After setting the dimension in <em>versions</em>, click on the version number and change the <em>MDB/RDB</em> option to <code>RDB</code></p>
                        },
                        {
                            instructionJsx: <p>Open the <em>query</em> designer and connect to the Northwind SQL data source. In the <em>mapping</em> window, map the relevant fields from the dbo.Product table in the database.</p>
                        },
                        {
                            instructionJsx: <p>In the Data Validation capsule, create a data view with the Stock cube and Product on the row axis. This should show the ‘live’ stock values from the database.</p>
                        },
                        {
                            instructionJsx: <p>Simulate an update by editing a stock value directly in the database using SQL Server Management Studio</p>,
                            hintJsx: <p>To do this, right click on the dbo.Product table in the <em>object explorer</em>, choose <em>edit top 200 rows</em> and directly overtype one or more values in the Stock field</p>
                        },
                        {
                            instructionJsx: <p>Refresh the data view to verify the values update automatically</p>
                        }
                    ]
                },
                {
                    name: 'Configure a Non-Numerical Cube',
                    objective: 'Board cubes can hold a variety of data types: numerical, text, pictures and even files. This exercise will enrich the quantitative data held on the sales persons such as revenue generated from their customers and their working hours, with additional information such as their profile picture and career history.',
                    tasks: [
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new cube called <code>Sales Person Picture</code> with the following attributes:</p>
                                    <ul>
                                        <li>Group: HR</li>
                                        <li>Data Type: Picture</li>
                                        <li><em>Blob extension</em>: <code>.jpg</code></li>
                                        <li>Dimensions: Sales Person</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>In Entities, <em>extract</em> the Sales Person entity to a text file</p>
                        },
                        {
                            instructionJsx: <p>The image files are stored on the server. Create a new <em>text file data reader</em> to load them to the picture cube. Name the protocol <code>CUBE-Sales Person Picture</code>.</p>
                        },
                        {
                            instructionJsx: <p>Connect to the text file containing the extracted Sales Person entity (this will be named according to the physical name of the entity) e.g. <code>D020.csv</code></p>
                        },
                        {
                            instructionJsx: <p>In <em>mapping</em>, drag the Sales Person Picture cube to the mapping window. Map the Sales Person dimension to the Sales Person code field in the text file and map the cube data to the Sales Person description field.</p>
                        },
                        {
                            instructionJsx: <p>In <em>ETL</em>, amend the <em>output</em> formula for the cube row to return the file path where the images are located and the filename of the image for each sales person. The images are located in <code>C:\Board\Dataset\DB Training</code> and the filenames are in the format <code>[name].jpg</code>. For example, the file path for Andrew Fuller would be <code>C:\Board\Dataset\DB Training\Andrew Fuller.jpg</code>.</p>,
                            hintJsx: <p>Formula should be <code>="C:\Board\Dataset\DB Training\"&C4&".JPG"</code></p>
                        },
                        {
                            instructionJsx: <p>Save the data reader and run it on the relevant text file</p>
                        },
                        {
                            instructionJsx: <p>In the Data Validation capsule, create a data view with the Sales Person Picture cube and Sales Person on the row axis. The images should be displayed.</p>
                        }
                    ]
                },
                {
                    name: 'Configure a Text Cube with Write-Back to the Source Database',
                    objective: 'RDB cubes can also be configured to not only read data from a data source but write data back after it is updated in Board. In this exercise, editing of a sales person’s career information will be configured to automatically update the Northwind SQL database.',
                    tasks: [
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new cube called <code>Career Information</code> with the following attributes:</p>
                                    <ul>
                                        <li>Group: HR</li>
                                        <li>Data Type: Text</li>
                                        <li>Dimensions: Sales Person</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Set the cube as an <em>RDB</em> cube and configure the query, mapping the field <code>dbo.Employee.Comments</code> to the cube data and the relevant field from the dbo.Employee table for the Sales Person dimension</p>
                        },
                        {
                            instructionJsx: <p>In the Data Validation capsule, add this cube to the data view layout with the Sales Person Picture cube. The text comments for each Sales Person should be displayed.</p>
                        },
                        {
                            instructionJsx: <p>Edit the layout of the data view, click on the Career Information data block and enable <em>data entry</em> from the right-hand configuration menu. Save the layout again.</p>
                        },
                        {
                            instructionJsx: <p>The text comments should now be shown with a yellow background, meaning they can be edited. Change one of the comments and click the tick icon for <em>save data entry</em>.</p>
                        },
                        {
                            instructionJsx: <p>This will write the change back to the Northwind SQL database. Open the dbo.Employees table in Management Studio to verify the update was made.</p>
                        }
                    ]
                },
                {
                    name: 'Setup Security on the Data Model',
                    objective: 'Security should be configured on the data model, allowing for both Developer access and end-user access, with the latter further restricted to limit the data shown to a sales person logging in to that relating to their customers only.',
                    tasks: [
                        {
                            instructionJsx: <p>In the data model, navigate to <em>Database Security</em>.</p>
                        },
                        {
                            instructionJsx: <p>Add a new <em>database security profile</em> called <code>ADMIN</code>. This should be configured with <em>security system</em> set to <code>builder</code> and <em>access mode</em> set to <code>database administrator</code>. This will ensure that you as the developer have full access to the data model.</p>
                        },
                        {
                            instructionJsx: <p>Add another new security profile called <code>SALES</code>. This should be configured with security system set to <code>access denied</code> and access mode set to <code>read and write</code>. This is the profile to be used by end users in the sales team.</p>
                        },
                        {
                            instructionJsx: <p>From the main menu, navigate to <em>System Administration</em> and then to <em>Profiles</em> under the <em>Security</em> heading</p>
                        },
                        {
                            instructionJsx: <p>Create a new <em>security profile</em> called <code>sales</code>. This should be configured with a <em>licence</em> type of <code>lite plus</code> and within <em>data models</em>, a <em>default database security profile</em> of SALES. Save the profile. This will set users up as an end-user with read and write access and grant them access to the Training data model.</p>
                        },
                        {
                            instructionJsx: <p>Navigate to <em>Users</em> under the <em>Security</em> heading</p>
                        },
                        {
                            instructionJsx: <p>Create a new <em>user</em> with the name of one of the sales persons. This should be configured with the <em>security profile</em> set to <code>sales</code> and <em>user authentication type</em> as <code>password</code>. Enter a password below for this user to login with.</p>
                        },
                        {
                            instructionJsx: <p>Before saving, navigate to the <em>select</em> section of the user configuration</p>
                        },
                        {
                            instructionJsx: <p>Choose your Training data model, which will open the <em>select</em> configuration to apply to this user. This will narrow down and restrict the data the user can see when viewing reports that query the data model. Set a selection on Sales Person entity so the user can only see data relating to their own customers. Save the new user.</p>
                        },
                        {
                            instructionJsx: <p>In the Data Validation capsule, create a data view showing Net Sales with Customer and Sales Person on the row axis. Save the screen, then sign out of Board.</p>
                        },
                        {
                            instructionJsx: <p>Sign in again as the new sales user you just created. Open the Data Validation capsule and open the screen with the data view you just created. The data view should automatically only be showing the Sales Person and related Customers for that user.</p>
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
                            instructionJsx: <p>In the <code>2. Reporting & Analysis</code> folder, create a new <em>capsule</em> called <code>Sales Reporting</code>. Ensure the <em>linked data model</em> is <code>Northwind</code>.</p>,
                            hintJsx: <p>You must switch to <em>design</em> mode to create a capsule by clicking the set square icon in the top-right</p>   
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
                            hintJsx: <p>Column widths can be sized by dragging on the data view header, or more accurately by specifying the width in the <em>columns</em> menu on the right-hand panel</p>
                        },
                        {
                            instructionJsx: <p>Double-click on any of the row labels and set up a <em>drill down</em> to Customer Country</p>,
                            hintJsx: <p>You can also single-click on a row label and choose <em>drill down</em> from the object context menu</p>
                        },
                        {
                            instructionJsx: <p>Save the screen, switch to <em>play mode</em> and interact with the report. Double-click on a row label to drill into a particular Continent.</p>
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
                            hintJsx: <p>To access the layout, ensure the data view is selected (border will be highlighted in blue) then click the configure layout icon from the context menu in the top-left of the object or the controls in the menu bar at the top of the screen</p>
                        },
                        {
                            instructionJsx: <p>In the layout <em>data view settings</em>, set the nested groups to be <em>collapsed</em> by default</p>
                        },
                        {
                            instructionJsx: <p>Add Product Division to the <em>column axis</em>, so it appears above Year</p>
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
                            hintJsx: <p>To change an already configured drill, select a row and click the <em>drill anywhere</em> icon from the data view context menu</p>
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
                            instructionJsx: <p>From the toolbox, add a <em>label</em> object. Enter the <em>substitution formula</em> <code>@Selection</code> as the <em>caption</em> to display the current selection on screen.</p>
                        },
                        {
                            instructionJsx: <p>Create a data view showing Net Sales data with Customer Country on the row axis</p>
                        },
                        {
                            instructionJsx: <p>Add Net Sales data again as a second <em>block</em> to your layout. Click on the block to open the block configuration. From <em>time functions</em>, enable the option<em>previous year</em> to have this block return data from the year prior to the one selected. Set the block <em>header</em> to <code>Net Sales PY</code> to label the column appropriately.</p>
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
                            instructionJsx: <p>Give the layout the <em>title</em> <code>Sales Growth</code> and save the layout</p>
                        },
                        {
                            instructionJsx: <p>Use <em>block formatting</em> to add a <code>%</code> symbol to the Growth % block. Ensure the decimal digits are maintained at 1 decimal place.</p>,
                            hintJsx: <p>Block format can be found from the data view menu on the right-hand side. Format all the necessary block elements (values and totals). A decimal digits setting of <code>-1</code> ensures the setting is taken from the layout and not overridden by the block format setting.</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>selector</em> object to the screen, set to the Product Group entity and with <em>type</em> set to <code>vertical</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>pager</em> object for the Area Manager entity, ensuring one area manager is always selected</p>,
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
                            hintJsx: <p>The ranking block needs to be immediately after the block that needs ranking, in this case block a: Net Sales</p>
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
                            instructionJsx: <p>Give the layout a <em>title</em> <code>Sales Volume vs PY</code> and save the layout</p>
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
                            instructionJsx: <p>Create a second cartesian chart on screen. Copy the layout from the data view and paste it as the new chart's layout</p>
                        },
                        {
                            instructionJsx: <p>Remove the blocks for Net Sales PY, Growth and Growth %. From <em>axis settings</em>, remove <em>down totals</em>. Change the layout title to <code>Sales by Country</code> and save the layout.</p>
                        },
                        {
                            instructionJsx: <p>In series options, set the Net Sales series to type <code>bar</code>. Leave Cumulated Vertical % series as a line but show on the secondary axis.</p>
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
                            instructionJsx: <p>In the <em>gauge settings</em> of the layout, set the <em>value</em> as the Net Sales block and the <em>max</em> as the Target block. Remove anything set to <em>second or third value</em>.</p>
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
                            instructionJsx: <p>Save the screen and navigate to <em>system administration</em>, using the Board button menu in the top-left of the screen. From there, go to <em>theme</em> and upload the Northwind.jpg image to appear as the <em>logo</em> in the banner menu.</p>
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
                            instructionJsx: <p>In <em>screen properties</em>, set the <em>background colour</em> to a colour of your choice and set the <em>screen size</em> to <code>custom</code>, with width and height set to <code>1920 x 820</code></p>
                        },
                        {
                            instructionJsx: <p>Create a label, removing the <em>caption</em> and setting the <em>border color</em> to black or white (depending on whether your screen background is light or dark)</p>
                        },
                        {
                            instructionJsx: <p><em>Position and size</em> the label accurately by setting the <em>top, left, width and height</em> properties according to the wireframe diagram below. Copy and paste the label for each of the seven sections of the wireframe.</p>,
                            image: 'wireframe.png',
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
                            instructionJsx: <p>Create a new screen <em>folder</em> called <code>Sales Analysis</code> and create a new <em>screen</em> in that folder called <code>Product Group</code>, setting it to use the Dashboard <em>mask</em></p>
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
                            instructionJsx: <p>In the <em>elements</em> menu, hide the title and legend by disabling their <em>visible</em> property</p>
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
                            instructionJsx: <p>Add a label positioned on the left side of the banner at the top of the screen, setting the caption with the substitution formula <code>@Product Group</code></p>
                        },
                        {
                            instructionJsx: <p>Save the screen and return to the Product Group screen. Set up a <em>drill to screen</em> action on each of the objects, with the Product Detail screen as the target.</p>,
                            hintJsx: <p>To set a drill on a chart object, click on one of the elements (e.g. bars on the bar chart) to select it and choose <em>drill down</em> from the object context menu</p>
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
                            instructionJsx: <p>Select the geo map object and configure the layout with the data Net Sales, Latitude, Longitude. Set Branch on the <em>markers axis</em>.</p>
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
                            instructionJsx: <p>Edit the geo map layout. Remove the Longitude and Latitude blocks. Change the <em>markers axis</em> to Customer Country and in <em>axis settings</em>, change the <em>display mode</em> to <code>code</code>. Add an <em>entity block</em> with the Customer Country entity, setting the <em>heading</em> as <code>Name</code>.</p>,
                            hintJsx: <p>An entity block can be added by dragging from the entity list on the left-hand side to the <em>data</em> section of the layout</p>
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
                            instructionJsx: <p>On the data view layout, change the axis to Branch and <em>sort</em> by Margin <em>descending</em> and <em>keep top</em> 20 branches</p>,
                            hintJsx: <p>For sorting, navigate to the <em>filter</em> tab of the data configuration in the layout</p>
                        },
                        {
                            instructionJsx: <p>Change the title on the <em>label</em> for this data view to <code>Average Price & Margin (Top 20)</code></p>
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
                                </div>
                        },
                        {
                            instructionJsx: <p>In the preview window of the layout, arrange the blocks within the card. Resize the picture block to fit down the entire left side of the card, with the other blocks arranged in rows across the right side. Save the layout.</p>
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
                            hintJsx: <p>The background colours of the data blocks can be set in the <em>color alert</em> settings in the layout</p>
                        },
                        {
                            instructionJsx: <p>In the Sales vs PY chart, change the <em>category axis</em> to Sales Person</p>
                        },
                        {
                            instructionJsx: <p>In the data view, we would like to know which country each Branch belongs to. Add Branch Country to the <em>row axis</em> – note how the sorting behaves in this case.</p>
                        },
                        {
                            instructionJsx: <p>We don't want the branches to be grouped into their countries as this means the sorting takes place within each Branch Country. Remove Branch Country from the row axis and add it as a data block instead.</p>
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
                            instructionJsx: <p>In the Sales Report <em>mask</em>, create a <em>menu</em> object in the top banner, with position set on the Sales Analysis folder</p>
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
                            instructionJsx: <p>Navigate to capsule <em>images</em> and add <code>up-right.png</code> and <code>down-right.png</code> from the Pictures folder</p>
                        },
                        {
                            instructionJsx: <p>In the data view on the Orders screen, add a new <em>algorithm</em> block with <em>data type</em> of <code>picture</code> that displays the correct icon depending on whether the orders have increased or decreased from the previous year. Set the <em>header</em> as a space character to prevent the formula being displayed in the column header.</p>,
                            hintJsx: <p>The algorithm should use an IF function to determine whether the orders have increased or not and return the filename of the image to display, in double quotes, e.g. <code>IF(...,"up-right.png","down-right.png")</code></p>
                        },
                        {
                            instructionJsx: <p>Save the layout and resize this column to <code>20 pixels</code> so the row heights are not stretched</p>,
                            hintJsx: <p>With the data view selected, open <em>columns</em> from the right-hand vertical menu, choose the algorithm block you just created and set the width</p>
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
                    name: 'Capsule Tiles',
                    objective: 'Style the entry point to your application, the capsule tile, with colours, images and data.',
                    tasks: [
                        {
                            instructionJsx: <p>From the Board button, navigate to the capsules main menu. Go into <em>design</em> mode and edit the capsule <em>properties</em> for your Sales Reporting capsule. This is accessed via the hamburger menu on the capsule tile.</p>
                        },
                        {
                            instructionJsx: <p>Configure the capsule tile to show some data for the current year. Click the <em>select</em> button and put a <em>dynamic selection</em> on Year to select the latest year of sales</p>
                        },
                        {
                            instructionJsx: <p>Configure the <em>sparkline</em> to plot Net Sales by Week, naming the data block <em>header</em> so it shows clearly what is being represented on the tile</p>
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
                            instructionJsx: <p>Save these changes and return to the capsule menu. In play mode this time, use the hamburger menu on your capsule tile to expand the size to maximum to see the new tile data.</p>
                        }
                    ]
                },
                {
                    name: 'Presentations',
                    objective: 'Explore how users are able to self-serve using the dashboards you have designed, easily creating interactive presentations without the need for PowerPoint.',
                    tasks: [
                        {
                            instructionJsx: <p>From the Board button menu, navigate to the <em>Presentations</em> environment</p>
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
                            instructionJsx: <p><em>Reset</em> the <em>screen select</em> on the Day entity and make a selection on Quarter to cover Q1 2021. Make another selection on Area Manager to filter on Andrew Fuller.</p>
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
                            instructionJsx: <p>In the <em>capsules</em> section, grant access to the <code>2.Reporting & Analysis</code> folder only</p>
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
        },
        {
            title: 'planning-procedures',
            exercises: [
                {
                    name: 'Hierarchy Loading',
                    objective: 'Implement a process for the application administrator to be able to load and manage the data model’s hierarchies from the Board front-end',
                    tasks: [
                        {
                            instructionJsx: <p>Open the Sales Planning <em>capsule</em> and open the <code>Data Loading</code> screen</p>
                        },
                        {
                            instructionJsx: <p>Open the <code>Northwind</code> <em>data model</em>, navigate to <em>procedures</em> and create a new <em>procedure</em> called <code>01.1 Load Hierarchies</code>
                            </p>,
                            hintJsx: <p>Open another browser tab for navigating to data model to make it easier to switch between capsule and data model</p>
                        },
                        {
                            instructionJsx: <p>Add an <em>action</em> to run the <em>SQL data reader protocol</em> <code>TREE–Product</code></p>
                        },
                        {
                            instructionJsx: <p>Add further steps for the Branch hierarchy (including Area Manager description) and the Shipper entity</p>,
                            hintJsx: <p>Protocols <code>TREE-Branch</code>, <code>ENT-Area Manager Desc</code> and <code>ENT-Shipper</code> should be run</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>refresh screen</em> step at the end of the procedure (NB most procedures will require this step at the end – the instructions after this exercise will not explicitly state this each time!)</p>
                        },
                        {
                            instructionJsx: <p>Return to the Data Loading screen and switch to <em>design mode</em>. Set the Load Hierarchies <em>button</em> to run the procedure.</p>,
                            hintJsx: <p>The <em>procedure location</em> should be set to <code>data model</code></p>
                        },
                        {
                            instructionJsx: <p>Switch to <em>play mode</em> and click the button to run the procedure. Note that one new Product and one new Customer are added to the data model, as shown by the data views.</p>
                        },
                        {
                            instructionJsx: <p>Go back to the data model, go to <em>relationships</em> and click <em>analyze</em>. Note that the new Product is missing a Product Category and the new Branch and Customer is missing the Continent.</p>
                        },
                        {
                            instructionJsx: <p>Continent does not come from the source data but can be derived from the Customer Country of the new Customer. A <em>normalize</em> action will perform this assignment. Make sure in the normalize options that the Branch to Continent and Customer to Continent options are checked.</p>
                        },
                        {
                            instructionJsx: <p>Return to the procedure and add a <em>normalize</em> action on the Branch hierarchy after the data reader protocol</p>
                        },
                        {
                            instructionJsx: <p>For the Product Category relationship, this will need to be set manually. Go to screen <code>Admin</code>. The new Product should be highlighted as missing a category.</p>
                        },
                        {
                            instructionJsx: <p>Edit the <em>layout</em> of the <em>data view</em> and enable <em>data entry</em> on the Product Category <em>block</em>. This will allow users to set the relationship.</p>
                        },
                        {
                            instructionJsx: <p>Return to play mode and assign the missing Product Category for the new Product as <code>New</code>. Click the icon to <em>save data entry</em> to confirm this assignment in the data model.</p>
                        },
                        {
                            instructionJsx: <p>Return to the Data Loading screen and rerun the procedure. Rerun the analyze relationships action and check that the missing parents are now resolved.</p>
                        }
                    ]
                },
                {
                    name: 'Transaction Loading',
                    objective: 'Implement a process for the application administrator to be able to initiate a load of the latest transactional data from the Board front-end',
                    tasks: [
                        {
                            instructionJsx: <p>In the data model, create a new procedure called <code>01.2 Load Sales Orders</code></p>
                        },
                        {
                            instructionJsx: <p>Add steps to run the SQL data reader protocols <code>CUBES-Sales</code> and <code>CUBE-Order Count</code></p>
                        },
                        {
                            instructionJsx: <p>In the Data Loading screen, set the Load Sales Orders button to run the procedure</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and run the procedure. Note the additional order is added to the order count.</p>
                        },
                        {
                            instructionJsx: <p><em>Drill</em> the Order Count data view to view the additional order</p>
                        }
                    ]
                },
                {
                    name: 'Timestamp',
                    objective: 'Implement functionality to record and display when the data loading processes were last run',
                    tasks: [
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new <em>entity</em> called <code>Task</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: Admin</li>
                                        <li>Code width: 2</li>
                                        <li>Desc width: 50</li>
                                        <li>Max item no.: 10</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Add two <em>members</em> manually to represent the two loading tasks (hierarchies and sales orders)</p>,
                            hintJsx: <p>Click on <em>content</em> to <em>add new members</em> via the back-end. Set the codes to anything logical and the description to the name of the task.</p>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>cube</em> called <code>Last Run</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: Admin</li>
                                        <li>Data type: Text</li>
                                        <li>Dimensions: Task</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Edit procedures 01.1 and 01.2, adding actions to first <em>select</em> the relevant Task and then run a <em>data flow</em> action to record the current date and time in the Last Run cube.  Use <em>substitution formula</em> <code>@datetime</code> as the data flow <em>expression</em>. Note for this particular data flow you must disable <em>high performance mode</em> in the <em>options</em> for the data flow.</p>,
                            hintJsx: <p>Click <em>edit layout</em> to retrieve the Last Run cube for the data flow, dragging it into the layout configuration. Set it as the <em>target</em> and set the target to equal the <code>@datetime</code> expression.</p>
                        },
                        {
                            instructionJsx: <p>In the Data Loading screen, add a <em>layout</em> to the Last Loaded labels to display the relevant information from the Last Run cube. Use a <em>layout select</em> to bring through the correct date to each one.</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and run the two load procedures again, noting the recorded date and time</p>
                        }
                    ]
                },
                {
                    name: 'Data Entry Basics',
                    objective: 'Explore how to configure data entry functionality and how end-users are able to enter data from the front-end',
                    tasks: [
                        {
                            instructionJsx: <p>Open screen <code>Data Entry Introduction</code></p>
                        },
                        {
                            instructionJsx: <p>The top data view shows the Working Hours data. Edit the <em>layout</em> and enable <em>data entry</em> on the Working Hours block. Save the layout.</p>
                        },
                        {
                            instructionJsx: <p>In play mode, enter some data into the data view cells for some of the empty months. They will initially appear in red to indicate the entry is pending. Click <em>save data entry</em> icon to commit to the cube.</p>
                        },
                        {
                            instructionJsx: <p>Edit the <em>total</em> for one of the months. Note how the change is distributed across the salespersons in proportion to the existing values.</p>
                        },
                        {
                            instructionJsx: <p>Click on an <em>individual value</em> and click the <em>lock cells</em> icon. Edit the total again and note how the change is only distributed among the other salespersons.</p>
                        },
                        {
                            instructionJsx: <p>Click on a month <em>total</em> and click the <em>lock cells</em> icon. Edit one of the individual values for that month and note how the change is reversed across the other salespersons, in proportion to their existing values.</p>
                        },
                        {
                            instructionJsx: <p>Enter a value preceded by <code>{'>'}</code>. Note how this copies the value across all cells to the right.</p>
                        },
                        {
                            instructionJsx: <p>Edit the layout again. Click on the Working Hours block, open the <em>data entry</em> configuration and add a new <em>input validation rule</em>.</p>
                        },
                        {
                            instructionJsx: <p>Set the <em>condition</em> to check that the value entered for working hours is not negative, using the same syntax as for algorithms. Enter a message for the user in <em>else show</em> to inform them the value cannot be negative.</p>,
                            hintJsx: <p>The formula for the condition should be <code>{'a>=0'}</code></p>
                        },
                        {
                            instructionJsx: <p>Save the layout, return to play mode and attempt to enter a negative value</p>
                        }
                    ]
                },
                {
                    name: 'Split & Splat',
                    objective: 'Explore how to configure data entry at an aggregate level of the cube data',
                    tasks: [
                        {
                            instructionJsx: <p>In the data model, create a procedure called <code>02.1 Copy Net Sales</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>data flow</em> action to copy data from cube Net Sales to cube ACT Net Sales. Add both cubes to the data flow layout, set the <em>target</em> to the ACT Net Sales block and enter the data flow <em>expression</em> to be reference the block for Net Sales.</p>,
                            hintJsx: <p>The data flow expressions for a copy cube would normally be <code>b=a</code></p>
                        },
                        {
                            instructionJsx: <p>Return to the Data Entry Introduction screen and set the procedure to the Copy Net Sales <em>button</em></p>
                        },
                        {
                            instructionJsx: <p>Run the procedure, to bring the data into the ACT Net Sales cube shown in the bottom data view</p>
                        },
                        {
                            instructionJsx: <p>Note that although data entry is enabled in the layout for this data view, it is not possible to modify or enter values. Data can only be entered at the <em>cell level</em> of the cube, whereas this data view is showing the ACT Net Sales data at an aggregate level.</p>
                        },
                        {
                            instructionJsx: <p>Use the Product <em>selector</em> to select a single product</p>
                        },
                        {
                            instructionJsx: <p><em>Drill</em> into one of the rows by Branch – note that data entry is now possible in the drill window. Modify some values and save.</p>
                        },
                        {
                            instructionJsx: <p>Close the drill window and <em>reset</em> the Product selection to see the new total values</p>
                        },
                        {
                            instructionJsx: <p>Edit the layout. For the ACT Net Sales block, open the data entry configuration and enable option <em>split splat</em>. Save the layout.</p>
                        },
                        {
                            instructionJsx: <p>Data entry is now possible at the summarized level. Modify a value and save. Drill down to note how the change in the summarized value has been distributed to the individual values making up the total, in proportion to their existing values.</p>
                        },
                        {
                            instructionJsx: <p>Note it is not possible to enter values in cells that have no existing values. Drill again to Branch and then drill a second time to Product to enter values to one of the empty months.</p>
                        }
                    ]
                },
                {
                    name: 'Data Flow Basics',
                    objective: 'Explore how data flows can copy data from cube to another, either wholly or a selected slice',
                    tasks: [
                        {
                            instructionJsx: <p>Open screen <code>Data Flow Introduction</code></p>
                        },
                        {
                            instructionJsx: <p>Set the procedure from the previous exercise, <code>02.1 Copy Net Sales</code>, to the Copy Net Sales button</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure to copy the data over again. Note from the data view that both cubes now have the same values – the previous values in ACT Net Sales were replaced.</p>
                        },
                        {
                            instructionJsx: <p>Create a new procedure called <code>03.1 Copy Selected Net Sales</code>, saving this from 02.1 Copy Net Sales</p>
                        },
                        {
                            instructionJsx: <p>Add a step at the beginning of the procedure to <em>clear</em> the entire ACT Net Sales cube</p>
                        },
                        {
                            instructionJsx: <p>Add an <em>interactive selection</em> action just before the data flow action to allow the user to select a specific Sales Person</p>
                        },
                        {
                            instructionJsx: <p>Save and return to the screen. Point the Copy Net Sales button to this new procedure.</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure, select a Sales Person and observe that only that slice of the data is copied</p>
                        }
                        
                    ]
                },
                {
                    name: 'Data Flow with Refer To',
                    objective: 'Explore how data flows can copy data within a cube, from one slice to another',
                    tasks: [
                        {
                            instructionJsx: <p>Create a new procedure called <code>03.2 Copy Product to Product</code>, saving this from 03.1 Copy Selected Net Sales</p>
                        },
                        {
                            instructionJsx: <p>Modify the <em>interactive selection</em> action to allow a selection on Product</p>
                        },
                        {
                            instructionJsx: <p>Modify the data flow, setting a <em>block reference</em> on the Net Sales block (source block), selecting a specific Product</p>,
                            hintJsx: <p>In the layout configuration, click on the Net Sales block and find block reference settings in the right-hand vertical menu</p>
                        },
                        {
                            instructionJsx: <p>Back in the procedure actions list, write a <em>comment</em> to describe that the data flow action is now selecting a specific product as the source data</p>
                        },
                        {
                            instructionJsx: <p>Save the procedure and set the Copy Product to Product button on the Data Flow Introduction screen to run it</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure, select a different product (or several products) from the interactive selection and note that the sales values are copied from one product to another</p>
                        },
                        {
                            instructionJsx: <p>Go into the data model and navigate to cubes. Edit the <code>ACT Net Sales</code> cube, changing the Branch and Product dimensions to be sparse.</p>,
                            hintJsx: <p>In the <em>versions</em> section of the cube configuration, click on the check marks against the relevant dimensions to change them to an <code>S</code>, which indicates a sparse setting</p>
                        },
                        {
                            instructionJsx: <p>Re-run the procedure, noting that now the entire amount is not copied from the source product.</p>
                        },
                        {
                            instructionJsx: <p>Drill to Branch on both the source and destination products to note that a data flow cannot open new sparse combinations in this instance</p>
                        }
                    ]
                },
                {
                    name: 'Budget Initialize Part 1',
                    objective: 'Implement a process for the executive-level users of the application to initialize the sales budget and enter the high-level expected sales for the budget year',
                    tasks: [
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Annual Sales Volume</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Sales Volume</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Year, Product, Branch</li>
                                    </ul>
                                </div> 
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Year Flag</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: Admin</li>
                                        <li>Data type: Integer</li>
                                        <li>Dimensions: Year</li>
                                    </ul>
                                </div> 
                        },                        
                        {
                            instructionJsx: <p>Open screen <code>Admin</code> and configure the data view under the Current Budget Year label</p>
                        },
                        {
                            instructionJsx: <p>Allow user to set a <em>flag</em> (represented by a value of 1) in <code>BUD Year Flag</code> cube to indicate the current budget year. Change the <em>appearance</em> of the block to a <code>checkbox</code> to make it more intuitive to set the flag.</p>,
                            hintJsx: <p>Data entry needs to be enabled on the BUD Year Flag block so the user can enter a flag on the desired Year. The appearance options for the blocks can be found in <em>data view settings</em> within the layout. A checkbox on a data entry block automatically inserts a value of 1 when the user clicks the checkbox.</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and enter a flag into the cube for 2021</p>
                        },
                        {
                            instructionJsx: <p>Open screen <code>Budget Initialization</code> and switch to design mode</p>
                        },
                        {
                            instructionJsx: <p>In the <em>screen select</em>, click the <em>[...]</em> icon for the Year entity and use the BUD Year Flag cube to <em>dynamically select</em> the budget year chosen in the Admin screen</p>,
                            hintJsx: <p>Enable dynamic selection using the <em>based on cube</em> option. Choose the BUD Year Flag cube where <em>period {'<>'} 0</em>.</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>substitution formula</em> to the Budget Year <em>label</em> to show the user which year is selected</p>,
                            hintJsx: <p>Set the <em>caption</em> to <code>@Year</code></p>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Configure the <em>data view</em> with the following blocks:</p>
                                    <ul>
                                        <li>Sales Volume from previous year</li>
                                        <li>BUD Annual Sales Volume with data entry enabled</li>
                                        <li>Algorithm calculating the growth % of the budget from previous year</li>
                                    </ul>
                                    <p>Show this data by Product Group on the rows and Area Manager on the columns</p>
                                </div>,
                            hintJsx: <p>The formula for the growth % algorithm should be <code>(b-a)/a%</code></p> 
                        },
                        {
                            instructionJsx: <p>Note that data entry is not possible at an aggregated level as there is no data in the cube. The budget needs to first be initialized.</p>
                        }
                    ]
                },
                {
                    name: 'Budget Initialize Part 2',
                    objective: 'Configure the data flows required to initialize the budget from the previous year’s actual sales and enhance the data entry functionality to allow the user to enter growth or absolute values for the budget sales',
                    tasks: [
                        {
                            instructionJsx: <p>Create a procedure called <code>04.1 Initialize Budget (Flat)</code></p>
                        },
                        {
                            instructionJsx: <p>For the first step, inform the user with a <em>message</em> telling them that the procedure will initialize the budget copying from previous year. Use the <em>yes/no</em> option to ask them if they want to continue and allow them to <em>exit</em> if not.</p>,
                            hintJsx: <p>Configure the <em>if yes</em> option to <code>none</code> and the <em>if no</em> option to <code>exit procedures</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>data flow</em> step to copy the previous year data from <code>Sales Volume</code> into <code>BUD Sales Volume</code> (you must disable <em>high performance mode</em> for this data flow)</p>
                        },
                        {
                            instructionJsx: <p>Save the procedure then create a new one, saving from 04.1. Call the new one <code>04.2 Initialize Budget (+10%)</code></p>
                        },
                        {
                            instructionJsx: <p>Modify the data flow expression to increase previous year sales by 10% in the budget</p>,
                            hintJsx: <p><code>BUD Net Sales = Net Sales * 1.1</code></p>
                        },
                        {
                            instructionJsx: <p>Modify the message to inform the user what this procedure will do</p>
                        },
                        {
                            instructionJsx: <p>Return to <code>Budget Initialization</code> screen and set the two buttons to run the relevant procedures</p>
                        },
                        {
                            instructionJsx: <p>Run each of the procedures to test. Note that after running, the user is then able to set the Product Group/Area Manager budgets individually using split & splat</p>
                        },
                        {
                            instructionJsx: <p>Modify the data view layout, enabling <em>data entry</em> on the Growth% block and using a <em>reverse algorithm</em> to allow the user to set the growth rate for each Product Group/Area Manager and calculate the resulting budget</p>,
                            hintJsx: <p>Reverse algorithm formula should be <code>b=a*(1+c/100)</code></p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode, change some values and <em>save</em> the data entry. </p>
                        },
                        {
                            instructionJsx: <p><em>Highlight</em> some rows on the data view and click the <em>select</em> icon on the data view context menu. This will update the screen selection with only the selected Product Groups.</p>
                        },
                        {
                            instructionJsx: <p>Run one of the initialize procedures again, then <em>reset</em> the screen selection. Note that only the selected Product Groups were re-initialized, the other were not. This is because screen selections automatically carry into the procedure.</p>
                        }
                    ]
                },
                {
                    name: 'Data Flow Target Alignment',
                    objective: 'Explore how data flows behave when the source and target cubes have different dimensions',
                    tasks: [
                        {
                            instructionJsx: <p>Open screen <code>Working Hours Budget</code></p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>05.1 Aggregate Working Hours</code> to <em>copy</em> data from <code>Working Hours</code> to <code>BUD Annual Working Hours</code></p>,
                            hintJsx: <p>Use a data flow action with expression <code>b=a</code></p>
                        },
                        {
                            instructionJsx: <p>Set the Aggregate button to run this procedure. Run the procedure and note that the values from the source cube are aggregated along the Month dimension and then written to the target cube.</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called 05.2 Divide Working Hours to <em>copy</em> data from <code>BUD Annual Working Hours</code> to <code>BUD Working Hours</code></p>
                        },
                        {
                            instructionJsx: <p>Set the Divide button to run this procedure. Run the procedure and note that the values in the source cube are duplicated along the Month dimension in the target cube.</p>
                        },
                        {
                            instructionJsx: <p>Edit the data flow in 05.2 to average the working hours across the months and run the procedure again</p>,
                            hintJsx: <p>The data flow expression to average the annual working hours should be <code>b=a/12</code></p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>05.3 Duplicate Working Hours</code> to <em>copy</em> data from <code>BUD Target Working Hours</code> to <code>BUD Working Hours</code></p>
                        },
                        {
                            instructionJsx: <p>Set the Duplicate button to run this procedure. Run the procedure and note that the values in the source cube are duplicated in the target cube according to the relationship between Area Manager and Sales Person.</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>05.4 Maximum Working Hours</code>. Add a data flow action to <em>copy</em> the <em>maximum</em> of the average annual working hours and target working hours, for each Sales Person and Month.</p>,
                            hintJsx: <p>The data flow layout should contain BUD Annual Working Hours, BUD Target Working Hours and BUD Working Hours (the target). The expression should use the <code>MAX</code> function to compare the average annual working hours (remember to divide BUD Annual Working Hours by 12) with the BUD Target Hours. The syntax for MAX is <code>MAX(expression1,expression2)</code>.</p>
                        }
                    ]
                },
                {
                    name: 'Seasonality',
                    objective: 'Implement a process to allow a user to set and apply a seasonal profile to the annual sales budget',
                    tasks: [
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Seasonal Profile</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Sales Volume</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Quarter, Product Group</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Sales Volume</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Sales Volume</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Month, Product, Branch</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: 
                                <div>
                                    <p>Open screen <code>Budget Seasonality</code>. In the top <em>data view</em>, configure the following blocks:</p>
                                    <ul>
                                        <li>BUD Annual Sales Volume</li>
                                        <li>BUD Seasonal Profile (<em>data entry</em> enabled, <em>detail by</em> Quarter, <em>format block</em> with % <em>symbol after</em>)</li>
                                    </ul>
                                    <p>Show Product Group on the rows.</p>
                                </div>
                        },
                        {
                            instructionJsx: <p>Configure the bottom data view to show <code>BUD Sales Volume</code> by Product Group on rows and Month on columns</p>
                        },
                        {
                            instructionJsx: <p>Enter values in the <code>BUD Seasonal Profile</code> cube to allocate the annual total for each Product Group across the quarters. The total for each Product Group should be 100%</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>06.1 Apply Seasonal Profile</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>data flow</em> action to allocate the annual sales budget in <code>BUD Annual Sales Volume</code> across the months, using the profiles entered in <code>BUD Seasonal Profile</code>. As the profiles are only entered by quarter, the quarterly amounts will need to be distributed evenly across the months in each quarter. The result of the allocation should be written to <code>BUD Sales Volume</code>.</p>,
                            hintJsx: <p>To distribute using the profile, the calculation should be <code>BUD Annual Sales Volume * (BUD Seasonal Profile / 100) / 3</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>message</em> action afterwards to inform the user that the seasonal profiles have applied (<em>notification popup</em> is best for this)</p>
                        },
                        {
                            instructionJsx: <p>Return to the screen, set the Apply Seasonal Profile button to run the procedure</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and run the procedure. Check that the totals for each product match the annual sales budgets.</p>
                        },
                        {
                            instructionJsx: <p>Amend one of the Product Groups' seasonal profiles so they no longer add up to 100%</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure again. Note that the total for that Product Group no longer matches the annual budget. This is something the procedure can check for and alert the user to.</p>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>cube</em> called <code>TEMP Seasonal Profile Check</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Sales Volume</li>
                                        <li>Data type: Integer</li>
                                        <li>Dimensions: Product Group</li>
                                    </ul>
                                </div> 
                        },
                        {
                            instructionJsx: <p>Return to the procedure. Add a new <em>group</em> called <code>Check</code> and bring it to the start of the procedure. Create another group called <code>Error</code> at the end of the procedure.</p>
                        },
                        {
                            instructionJsx: <p>In the Check group, add a <em>data flow</em> action to check that the value in BUD Seasonal Profile for each Product Group totals <code>100</code>. If it does, write a <code>0</code> into <code>TEMP Seasonal Profile Check</code>, if not, write a <code>1</code> (a flag representing an error). Use an IF function in the data flow to perform this check.</p>,
                            hintJsx: <p>Data flow expression could be <code>TEMP Seasonal Profile Check = IF(BUD Seasonal Profile = 100, 0, 1)</code></p>
                        },
                        {
                            instructionJsx: <p>Add an <em>if then else</em> action after the data flow to control the flow of the procedure. If the value of <code>TEMP Seasonal Profile Check</code> is greater than or equal to 1, the procedure should move to the <code>Error</code> group. If the value is 0 (i.e. no Product Groups had errors), the procedure should move to the <code>Main</code> group.</p>
                        },
                        {
                            instructionJsx: <p>In the Error group, add a <em>message</em> action to inform the user that at least one of the Product Groups has not been correctly allocated</p>
                        },
                        {
                            instructionJsx: <p>Add another action to the Error group to clear the TEMP cube and ensure the procedure then terminates</p>,
                            hintJsx: <p>A procedure will automatically terminate if it reaches the end of a group with no further instructions to move to another group (or <em>get back</em> to an earlier group)</p>
                        },
                        {
                            instructionJsx: <p>Rerun the procedure from the screen, testing that the allocation only runs if the Product Groups’ BUD Seasonal Profile all add up to 100%</p>
                        }
                    ]
                },
                {
                    name: 'Revenue Budget Part 1',
                    objective: 'Implement a process to calculate the budgeted revenue from the sales budget input in the previous phase of the budget cycle',
                    tasks: [
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Sales Price</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Revenue</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Year, Product</li>
                                    </ul>
                                </div> 
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Net Sales</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Revenue</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Month, Product, Branch</li>
                                    </ul>
                                </div> 
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Open screen <code>Revenue Budget</code>. In the top data view, configure the following layout:</p>
                                    <ul>
                                        <li>Data: Product Std Price</li>
                                        <li>Data: BUD Sales Price, <em>data entry</em> enabled</li>
                                        <li>Algorithm called <code>Budget Increase/(Decrease)</code>, calculating difference between first two blocks</li>
                                    </ul>
                                    <p>Put Product and Product Group on the row axis</p>
                                </div> 
                        },
                        {
                            instructionJsx: <p>In the bottom data view, configure the layout to show <code>BUD Net Sales</code> with Product Group on the rows and Month on the columns</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>07.1 Initialize Sales Prices</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>data flow</em> step to copy data from the ROLAP <code>Product Std Price</code> cube to the <code>BUD Sales Price</code> cube. Note that the selection will come from the screen automatically and record the current Std Price values from the source data to the current budget year.</p>
                        },
                        {
                            instructionJsx: <p>Add a warning that this action will overwrite any amendments made to the budget sales prices, allowing the user to abort</p>,
                            hintJsx: <p>Use a <em>message</em> action to achieve this</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>07.2 Calculate Net Sales Budget</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>data flow</em> to calculate the <code>BUD Net Sales</code> cube from <code>BUD Sales Volume</code> and <code>BUD Sales Price</code></p>,
                            hintJsx: <p>BUD Net Sales is calculated by multiplying BUD Sales Volume and BUD Sales Price together</p>
                        },
                        {
                            instructionJsx: <p>In the screen, set the Initialize Sales Prices button to run the 07.1 procedure and Calculate Net Sales button to run the 07.2 procedure</p>
                        },
                        {
                            instructionJsx: <p>Run Initialize Sales Prices, then amend some of the prices manually. Use <em>lock & spread</em> function to increase or decrease the price of several products at once.</p>
                        },
                        {
                            instructionJsx: <p>Run Calculate Net Sales and sense check the results</p>
                        }
                    ]
                },
                {
                    name: 'Revenue Budget Part 2',
                    objective: 'Enhance the process by calculating a weighted average for the prices at each Product Group and setting-up drills and triggers for a more seamless user experience',
                    tasks: [
                        {
                            instructionJsx: <p>In the screen <code>Revenue Budget</code>, edit the layout on the Sales Price data view. Click <em>copy</em> to copy the layout to clipboard (this will be used again later).</p>
                        },
                        {
                            instructionJsx: <p>Remove Product from the row axis leaving only Product Group, noting how the price data automatically aggregates, which doesn’t make sense. Instead, we would like to see a weighted average price for each Product Group.</p>
                        },
                        {
                            instructionJsx: <p>Add additional blocks for <code>BUD Sales Volume</code>, <code>BUD Net Sales</code> (<em>hidden</em>) and an <em>algorithm</em> block to calculate the weighted average price from these</p>,
                            hintJsx: <p>Calculate weighted average price by dividing BUD Net Sales by BUD Sales Volume</p>
                        },
                        {
                            instructionJsx: <p>Remove the blocks for <code>Std Price</code>, <code>BUD Sales Price</code> and <code>Budget Increase/(Decrease)</code>. Save the layout – we now can see an average price but can no longer edit the price of individual products.</p>
                        },
                        {
                            instructionJsx: <p>On the price data view, configure a <em>drill</em> to Product. Edit the <em>drill layout</em>, <em>pasting</em> the previously copied layout. The user can now drill to a Product Group and amend the prices for those Products.</p>
                        },
                        {
                            instructionJsx: <p>Note that after updating the prices, the weighted average price doesn’t update right away – the user will first need to run the Calculate Net Sales procedure again</p>
                        },
                        {
                            instructionJsx: <p>To automate this calculation whenever a price is changed, set a <em>data entry trigger</em> on the data view, running procedure 07.2. Set the procedure's <em>notify execution</em> to <code>background execution</code> and remove the <em>refresh screen</em> step to create a better experience for the user</p>,
                            hintJsx: <p>Data entry trigger can be found in the data view's configuration menu on the right-hand side of the screen</p>
                        }
                    ]
                },
                {
                    name: 'Currency Conversion',
                    objective: 'Implement a process to convert the revenue budget into local currency, based on the customers’ location',
                    tasks: [
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new <em>entity</em> called <code>Currency</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: Branch</li>
                                        <li>Code width: 3</li>
                                        <li>Desc width: 30</li>
                                        <li>Max item no.: 20</li>
                                    </ul>
                                </div> 
                        },
                        {
                            instructionJsx: <p>Set the Currency entity as a <em>parent</em> of Customer Country in the Branch <em>hierarchy</em></p>
                        },
                        {
                            instructionJsx: <p>Set the <em>normalize</em> options to perform normalization of all <em>indirect relationships</em> to Currency, going <em>through</em> Country</p>
                        },
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new <em>data reader</em> called <code>REL-Country-Currency</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: Master</li>
                                        <li>Source: Text file</li>
                                        <li>Path: C:\Board\Dataset\PR Training\</li>
                                        <li>Pattern: Currency.csv</li>
                                    </ul>
                                    <p>Map this file to <em>populate</em> the Currency entity and <em>set the relationships</em> with Country</p>
                                </div>,
                            hintJsx: <p>The <em>mode</em> of the Currency code field must be set to <code>add new item</code> to populate this new entity</p> 
                        },
                        {
                            instructionJsx: <p>Run the data reader. Check the entity and relationships are populated, then run the <em>normalize</em> actions to ensure consistency throughout the tree. NB procedure 01.1 from the start of the course will take care of this automatically in future if new customers are added later.</p>
                        },
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Exchange Rate</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Revenue</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Year, Currency</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Net Sales Local Curr</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Revenue</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Month, Product, Branch</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Open screen <code>Currency Simulation</code>. In the top <em>data view</em>, configure it to show the <code>BUD Exchange Rate</code> cube, <em>data entry</em> enabled and with 5 decimal <em>digits</em>, with Currency on the rows (remember to <em>show all</em> so data entry can be performed)</p>
                        },
                        {
                            instructionJsx: <p>In the bottom <em>data view</em>, configure it to show both <code>BUD Net Sales</code> and <code>BUD Net Sales Local Curr</code>, with Currency on the rows. Note that the <em>total</em> for the Local Curr column doesn’t make sense, so should be disabled. To be clearer to the end user, enter a <em>heading</em> for the BUD Net Sales block to add 'GBP' to the heading.</p>,
                            hintJsx: <p>To disable a total for an single block, set the <em>summary</em> to <code>no total</code> in the block configuration menu</p>
                        },
                        {
                            instructionJsx: <p>In play mode, enter the exchange rates between GBP and the local currencies. A Google Sheet is set-up to get the latest rates <a href=" https://docs.google.com/spreadsheets/d/1OzXxRJgEDnkFdvn8-9Izkr3qJp4PkCv63jd1P42shac/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> (this should also be bookmarked in your training browser). These can be copied and pasted directly into the data view.</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>08.1 Convert to Local Currency</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>data flow</em> action to <em>calculate</em> the <code>BUD Net Sales Local Curr</code> cube from the <code>BUD Net Sales</code> and <code>BUD Exchange Rate</code> cubes</p>,
                            hintJsx: <p>Data flow expression should be <code>Bud Net Sales Local Curr = BUD Net Sales * BUD Exchange Rate</code></p>
                        },
                        {
                            instructionJsx: <p>Set the Convert to Local Currency button to run this procedure. Run it and sense check the results.</p>
                        }
                    ]
                },
                {
                    name: 'Currency Simulation',
                    objective: 'Extend the currency conversion functionality to allow modelling and comparison between different currency forecast scenarios and the impact on the revenue budget',
                    tasks: [
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>entity</em> called <code>Scenario</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: Admin</li>
                                        <li>Code width: 2</li>
                                        <li>Desc width: 30</li>
                                        <li>Max item no.: 5</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p><em>Populate</em> the entity manually with three members:</p>
                                    <ul>
                                        <li>01 Scenario 1</li>
                                        <li>02 Scenario 2</li>
                                        <li>03 Scenario 3</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Currency Fluctuations</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Revenue</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Month, Currency, Scenario</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new <em>cube</em> called <code>BUD Net Sales Simulation</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Revenue</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Month, Product, Branch, Scenario</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Return to screen <code>Currency Simulation</code>. In the top data view, add an additional block for <code>BUD Currency Fluctuations</code> with <em>data entry</em> enabled and 3 decimal <em>digits</em> displayed.</p>
                        },
                        {
                            instructionJsx: <p>Data entry to this cube needs to be by Month but bringing that entity on the column axis wouldn't make sense for the BUD Exchange Rate cube, which is dimensioned by Year. In the configuration for the BUD Currency Fluctuations block, set it to <em>detail by</em> Month.</p>
                        },
                        {
                            instructionJsx: <p>In the bottom data view, add an additional block for <code>BUD Net Sales Simulation</code></p>
                        },
                        {
                            instructionJsx: <p>Set the <em>pager</em> to the <code>Scenario</code> entity, with <em>no all</em> option enabled. With a Scenario selected, data entry should now be possible for BUD Currency Fluctuations.</p>
                        },
                        {
                            instructionJsx: <p>In play mode, enter some values in BUD Currency Fluctuations to forecast the effect of certain currency movements. These can be positive or negative values to represent gains or falls in the value of GBP against each currency.</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>08.2 Currency Simulation</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>data flow</em> action that <em>calculates</em> <code>BUD Net Sales Simulation</code>. This should take the net sales in local currency calculated in the previous procedure and convert back to GBP using the exchange rates including the effect of any forecast fluctuations. Use <em>yearly cumulated value time function</em> on the <code>BUD Currency Fluctuation</code> block to ensure fluctuations cumulate month by month.</p>,
                            hintJsx: <p>Data flow expression should be <code>BUD Net Sales simulation = BUD Net Sales Local Curr / (BUD Exchange Rates + BUD Currency Fluctuations)</code></p>
                        },
                        {
                            instructionJsx: <p>Set the Simulate Currency Fluctuations button to run the procedure</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure and sense check the results. A <em>drill</em> to Month will help with this.</p>
                        },
                        {
                            instructionJsx: <p>In the layout of the bottom data view, add an <em>algorithm</em> block called <code>Currency Exposure</code> to calculate the impact on net sales of the forecast fluctuations for each Currency in the selected Scenario</p>,
                            hintJsx: <p>The algorithm should calculate the difference between BUD Net Sales Simulation and BUD Net Sales GBP</p>
                        },
                        {
                            instructionJsx: <p>Choose a different Scenario on the pager, enter some different fluctuations and simulate those as well</p>
                        },
                        {
                            instructionJsx: <p>To compare the scenarios, edit the layout of the bottom data view, setting a <em>layout select</em> to select all three Scenarios (this will effectively override the pager for that layout) and adding Scenario to the column axes</p>
                        }
                    ]
                },
                {
                    name: 'Obsolete Products',
                    objective: 'Implement a process to allow removal of individual products from the sales budget',
                    tasks: [
                        {
                            instructionJsx: <p>Open screen <code>Product Budget</code>. Configure the main data view to display the <code>BUD Sales Volume</code> cube, with <em>data entry</em> enabled. Assign Product and Product Group on the rows, with <em>show all</em> enabled, and Month on the columns.</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>09.1 Clear Product</code></p>
                        },
                        {
                            instructionJsx: <p>Add a <em>clear cube</em> action to clear data from <code>BUD Sales Volume</code> for the selected Product</p>,
                            hintJsx: <p>Enable the <em>use current selection</em> option for the clear cube action. The selection will automatically carry into the procedure from the screen.</p>
                        },
                        {
                            instructionJsx: <p>Set a warning <em>message</em> before this action to inform the user what is about to happen and allow them to abort</p>
                        },
                        {
                            instructionJsx: <p>Set this procedure to run when the user <em>drills</em> on a Product in the data view. The Product that is drilled will be added to the screen selection that is active in the procedure.</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and drill on a product to clear the budget</p>
                        }
                    ]
                },
                {
                    name: 'New Products',
                    objective: 'Implement a process to allow users to add a new product to the hierarchy and assign it a sales profile from an existing product, allowing a budget to be set',
                    tasks: [
                        {
                            instructionJsx: <p>On the <em>entity editor</em> object, set the <em>ATO entities configuration</em> to allow <em>insert/edit</em> of new Products. Assign new Products to a <em>default</em> Product Category of <code>New</code></p>
                        },
                        {
                            instructionJsx: <p>Configure the small <em>data view</em> below the entity editor to display <code>BUD Sales Price</code> data with <em>data entry</em> enabled. Display Product on the rows, with <em>show all</em> enabled and <em>down totals</em> disabled.</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and use the entity editor to <em>insert</em> a new Product. Enter a price for the new product in the data view below. <em>Refresh</em> the screen to see the product appear in the main data view. Note that it is not possible to enter a Sales Volume budget for the new product because there is no data in the cube to use to split the budget across the Branches.</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>09.2 Copy Product Profile</code> to allow the data from a similar product to be copied to the new one. The user should be able to choose the product to copy data from so using a <em>refer to</em> on the source cube will not be sufficient, as the choice of Product is hard-coded in the data flow.</p>
                        },
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create a new <em>cube</em> called <code>TEMP Product Copy</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Sales Volume</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Month, Branch</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Return to the procedure. The procedure will initially run with a selection made on the new product (from the drill action that will call the procedure). Create an action to <em>save selection</em> for use later on, giving the saved selection the name <code>Destination Product</code>.</p>
                        },
                        {
                            instructionJsx: <p>Next, add an action to <em>remove</em> the selection on Product.</p>
                        },
                        {
                            instructionJsx: <p>Add an action to allow the user to select the Product to copy data from. Before this action, it would be useful to show a <em>message</em> to tell the user what they are about to select.</p>,
                            hintJsx: <p>Use an <em>interactive selection</em> to allow the user to select the source Product</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>data flow</em> action to <em>copy</em> data for the selected Product from <code>BUD Sales Volume</code> to <code>TEMP Product Copy</code></p>
                        },
                        {
                            instructionJsx: <p>Add an action to <em>restore</em> the Destination Product selection</p>
                        },
                        {
                            instructionJsx: <p>Add an action to copy data back from <code>TEMP Product Copy</code> cube to <code>BUD Sales Volume</code>. Note that the change in selection has effectively copied data from one slice of BUD Sales Volume to another.</p>
                        },
                        {
                            instructionJsx: <p>Add an action to <em>clear</em> the <code>TEMP Product Copy</code> cube</p>
                        },
                        {
                            instructionJsx: <p>Add an action to inform the user that data has been copied to the new product. Use the <em>substitution formula</em> <code>@Product</code> to display the name of that Product in the message.</p>
                        },
                        {
                            instructionJsx: <p>Return to the screen and add this procedure to the <em>drill</em> action on the data view, allowing the user to choose between 09.1 and 09.2</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and run the procedure. Check the data has copied correctly.</p>
                        },
                        {
                            instructionJsx: <p>Return to the procedure and add <em>breakpoints</em> on the first step and each of the data flow steps</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure again from the drill action and note that the procedure will pause at each breakpoint. Take a note of the active <em>selection</em> at each point to observe that it changes correctly.</p>
                        },
                        {
                            instructionJsx: <p>Note that the <em>interactive selection</em> only shows a list of Products in the same Product Group as the one to be copied to. Amend the procedure so the user can choose from any Product. As Product Group is in the <em>row axis</em> of the data view, this selection is also carried into the procedure, affecting the interactive selection.</p>,
                            hintJsx: <p>Using the action <em>remove selection on tree</em> instead of remove selection on entity will ensure that both Product and Product Group selections are removed ahead of the interactive selection step</p>
                        },
                        {
                            instructionJsx: <p>Remove the <em>breakpoints</em> from the procedure</p>
                        }
                    ]
                },
                {
                    name: 'Update Net Sales',
                    objective: 'Ensure consistency between the data held in different cubes across the application by implementing a process to recalculate all relevant cubes whenever the sales volume budget is updated',
                    tasks: [
                        {
                            instructionJsx: <p>Any changes made to the <code>BUD Sales Volume</code> data should flow through to the net sales/revenue data. Create a procedure called <code>09.3 Update Net Sales</code>.</p>
                        },
                        {
                            instructionJsx: <p>This procedure should <em>call</em> each of the procedures from previous exercises with calculations that would be affected by a change in the BUD Sales Volume</p>,
                            hintJsx: <p><code>07.2 Calculate Net Sales Budget</code>, <code>08.1 Convert to Local Currency</code> and <code>08.2 Currency Simulation</code> are the procedures containing calculations affected by a change in BUD Sales Volume. They should be called with <em>copy current select</em> enabled to ensure they recalculate the current budget year only.</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>message</em> at the end to inform the user that process is complete</p>
                        },
                        {
                            instructionJsx: <p>In the Product Budget screen, set the Update Net Sales Button to run this procedure</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure and check back on the Revenue Budget or Currency Simulation screens to ensure values have been updated with the changes to the Product Budget</p>
                        },
                        {
                            instructionJsx: <p>Note that there may be multiple refreshes when running this procedure if the called procedures each have refresh screen actions. These could now be <em>disabled</em>.</p>
                        }
                    ]
                },
                {
                    name: 'Sales Person Workflow',
                    objective: 'Implement workflow to the budget process, allowing budget administrators to track the progress of individual users’ contributions and controlling when they can add or edit data',
                    tasks: [
                        {
                            instructionJsx: <p>Open screen <code>Customer Budget</code>. Configure the main <em>data view</em> to show <code>BUD Sales Volume</code> (<em>data entry</em> enabled), with Sales Person and Customer on the rows (<em>show all</em> enabled) and Month on the columns.</p>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>entity</em> called <code>Workflow Status</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: Admin</li>
                                        <li>Code width: 2</li>
                                        <li>Desc width: 20</li>
                                        <li>Max item no.: 10</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p><em>Populate</em> the entity manually with the following members:</p>
                                    <ul>
                                        <li>10 Open</li>
                                        <li>20 Submitted</li>
                                        <li>30 Rejected</li>
                                        <li>40 Approved</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: 
                                <div>
                                    <p>Create three new <em>cubes</em> in a group called <code>PLN Workflow</code>, with the following data type and dimensions:</p>
                                    <ul>
                                        <li>BUD Workflow Flag - Integer - Year, Sales Person, Workflow Status</li>
                                        <li>BUD Workflow Status - Text - Year, Sales Person</li>
                                        <li>BUD Workflow Timestamp - Text - Year, Sales Person, Workflow Status</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Return to the screen and configure the <em>data view</em> on the right-hand side with the following blocks:</p>
                                    <ul>
                                        <li>Data: BUD Workflow Status, <em>hidden</em></li>
                                        <li>Algorithm displaying <em>text</em> <code>Not started</code> if BUD Workflow Status is empty, otherwise displaying the text from BUD Workflow Status. Set <em>heading</em> to <code>Status</code></li>
                                        <li>Algorithm displaying <em>text</em> <code>Start budget</code> if BUD Workflow Status is empty, <code>Submit budget</code> if BUD Workflow Status contains <code>Open</code>, otherwise displaying nothing if BUD Workflow Status contains anything else. Set <em>heading</em> to <code>Action</code></li>
                                    </ul>
                                    <p>Show Sales Person on the rows with <em>show all</em> enabled and <em>down totals</em> disabled</p>
                                </div>,
                            hintJsx: <p>The algorithms should use an<em>IF</em> function to display the correct text. To check if BUD Workflow Status is empty, the formula would be <code>IF(a="",...,...)</code>. The Action block algorithm will need to use a nested IF such as <code>IF(a="",...,IF(a="Open",...,...))</code>. The output of the IF functions should also be in double-quotes and the block <em>data type</em> must be set to <code>text</code>.</p>
                        },
                        {
                            instructionJsx: <p><em>Format</em> the Action block to be highlighted in a different colour, to indicate to the user they can click on this to perform the action</p>,
                            hintJsx: <p>Use the <em>block format</em> configuration from the data view right-hand vertical menu</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>10.1 Workflow Action</code></p>
                        },
                        {
                            instructionJsx: <p>Add an action to <em>select</em> Workflow Status = <code>Open</code></p>
                        },
                        {
                            instructionJsx: 
                                <div>
                                    <p>Add three <em>data flow</em> actions to do the following:</p>
                                    <ul>
                                        <li>Insert a flag <code>1</code> in the cube <code>BUD Workflow Flag</code></li>
                                        <li>Insert the text <code>Open</code> in the cube <code>BUD Workflow Status</code></li>
                                        <li>Insert the current date and time in the cube <code>BUD Workflow Timestamp</code> (<em>high-performance mode</em> must be disabled for this data flow)</li>
                                    </ul>
                                </div>,
                            hintJsx: <p>These data flows only require the target cube in the layout and the expressions are hard-coded. Ensure text is enclosed in double-quotes.For the current date and time, a substitution formula is required.</p>
                        },
                        {
                            instructionJsx: <p>In the workflow data view layout, go to <em>data view settings</em> and set the Action block to run the procedure</p>,
                            hintJsx: <p>Under <em>column appearance</em>, the block can be set to function as a <code>button</code>, with the pencil icon allowing the action to be configured</p>
                        },
                        {
                            instructionJsx: <p>In the main <em>data view</em>, add a block for <code>BUD Workflow Flag</code>. <em>Hide</em> the block and set a <em>block reference</em> on Workflow Status = <code>Open</code>. This block will return a flag of 1 where the Sales Person workflow status is open.</p>
                        },
                        {
                            instructionJsx: <p>Set the <code>BUD Sales Volume</code> <em>data entry</em> to be <em>locked</em> by <code>BUD Workflow Flag</code> where the flag is empty (0). Data entry should immediately become disabled on saving the layout.</p>,
                            hintJsx: <p>Open the data entry configuration for BUD Sales Volume and open the options for <em>data view cells locked by</em> to set this lock. Ensure the lock is set when the flag is 0.</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and run the start budget action on one of the Sales Persons. Check that the Status changes to <code>Open</code>, the Action changes to <code>Submit budget</code> and the <em>data entry</em> for that Sales Person becomes available.</p>
                        },
                        {
                            instructionJsx: <p>Run the submit budget action on the same Sales Person. Note that nothing happens as the procedure is currently only handling the start budget action. Return to the procedure to add the ability to submit budget.</p>
                        },
                        {
                            instructionJsx: <p>Create a new <em>group</em> called <code>Open</code> and move the selection action and data flow actions into it</p>
                        },
                        {
                            instructionJsx: <p>Create a new <em>group</em> called <code>Submit</code> and <em>copy</em> and <em>paste</em> all the actions in the Open group to it</p>
                        },
                        {
                            instructionJsx: <p>Add an action to the start of the Submit group to <em>clear cube</em> <code>BUD Workflow Flag</code> for the <em>current selection. This will clear out the previous status flag before setting a new one.</em></p>
                        },
                        {
                            instructionJsx: <p>Amend the <em>selection</em> in the Submit group to Workflow Status = <code>Submitted</code></p>
                        },
                        {
                            instructionJsx: <p>Amend the text to be inserted into BUD Workflow Status to <code>Submitted</code></p>
                        },
                        {
                            instructionJsx: <p>In the Main group (which should be the first group in the procedure) add an <em>if then else</em> action at the beginning to check if  <code>BUD Workflow Flag = 0</code> (i.e. the workflow status is not started). If so, <em>go to</em> the Open group.</p>
                        },
                        {
                            instructionJsx: <p>After the if then else step, <em>select</em> Workflow Status = <code>Open</code>, then add another <em>if then else</em> action to check that the workflow status is open. If so, go to the Submit group.</p>,
                            hintJsx: <p>The selection on Workflow Status = Open means that having the if then else check if BUD Workflow Status = 1 will check for open status</p>
                        },
                        {
                            instructionJsx: <p>Create another <em>group</em> called <code>Error</code>. Add a <em>message</em> in there to inform the user that no action is currently available.</p>
                        },
                        {
                            instructionJsx: <p>In the Main group, add a <em>go to group</em> action at the end to execute the Error group if none of the if then else conditions are fulfilled</p>
                        },
                        {
                            instructionJsx: <p>Return to the screen and test the submit budget action and that no action can be run if status is already Submitted</p>
                        },
                        {
                            instructionJsx: <p>Set the Update Net Sales button to run the procedure <code>09.3 Update Net Sales</code> (as per the last exercise)</p>
                        }
                    ]
                },
                {
                    name: 'Manager Approval',
                    objective: 'Implement functionality for managers to review the budgets and workflow status of their respective salespersons and allow them to approve or reject specific submissions',
                    tasks: [
                        {
                            instructionJsx: 
                            <div>
                                <p>Open screen <code>Manager Review</code>. Configure the <em>data view</em> with the following blocks:</p>
                                <ul>
                                    <li>Data: BUD Sales Volume</li>
                                    <li>Data: BUD Net Sales</li>
                                    <li>Data: BUD Workflow Status</li>
                                </ul>
                                <p>Show the data by Sales Person and Area Manager on the row axis.</p>
                            </div>
                        },
                        {
                            instructionJsx: <p>Navigate to the capsule <em>images</em> and add the <code>approve.png</code> and <code>reject.png</code> images to the capsule from the Pictures folder on your machine</p>
                        },
                        {
                            instructionJsx: <p>Return to the screen and add two <em>picture algorithms</em> to the data view layout, one for each of the two images loaded in the previous task. The images should only show if BUD Workflow Status = <code>Submitted</code>, otherwise the block should show nothing.</p>,
                            hintJsx: <p>To display an image using a picture algorithm, reference the filename of the image in double-quotes. Use an <em>IF</em> function to check BUD Workflow Status and omit the false condition to show nothing, e.g. <code>IF(...,"image.png")</code>. Ensure the algorithm <em>data type</em> is set to <code>picture</code></p>
                        },
                        {
                            instructionJsx: <p>In the data view right-hand vertical menu, size these columns to <code>20 pixels</code> so they don’t stretch the row height</p>
                        },
                        {
                            instructionJsx: <p>Add a final block to the layout, <code>BUD Workflow Timestamp</code>, <em>detailed by</em> Workflow Status entity</p>
                        },
                        {
                            instructionJsx: <p>Create a new procedure called <code>10.2 Workflow Approve</code>, saving from 10.1</p>
                        },
                        {
                            instructionJsx: <p>Modify the procedure to perform the correct actions to set the workflow status to Approved. Remove the Open group (and all steps inside). <em>Rename</em> the Submit group to <code>Approve</code> and amend the actions inside accordingly. The Check group should only run the actions in Approve if the Workflow Status is currently Submitted, otherwise an error should be shown instead.</p>,
                            hintJsx: <p>The <em>selection</em> in the Approve group should be modified to Workflow Status = <code>Approved</code>. The data flow to <code>BUD Workflow Status</code> should be modified to write the text <code>Approved</code>.</p>
                        },
                        {
                            instructionJsx: <p>Create a new procedure called <code>10.3 Workflow Reject</code>, saving from 10.2.Modify the procedure to perform the correct actions to set the workflow status to Rejected.</p>
                        },
                        {
                            instructionJsx: <p>Return to the screen and <em>set actions</em> on each of the algorithm blocks to run the relevant procedure</p>,
                            hintJsx: <p>approve.png block should run 10.2 and reject.png block should run 10.3</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and test that both actions work as expected and that the error message is displayed if run where the workflow status is not currently Submitted.</p>
                        },
                        {
                            instructionJsx: <p>Return to the <code>Customer Budget</code> screen to allow the budget to be re-opened if it is rejected by the Area Manager.</p>
                        },
                        {
                            instructionJsx: <p>Edit the layout of the workflow <em>data view</em>, editing the <em>algorithm</em> formula for the Action block to show text <code>Reopen budget</code> if BUD Workflow Status = <code>Rejected</code></p>,
                            hintJsx: <p>Add another nested IF to the formula to check for Rejected status</p>
                        },
                        {
                            instructionJsx: <p>Edit the procedure 10.1 to add an additional check for the status being Rejected. If so then the procedure should go to the Open group. The Open group will now also need to begin with a <em>clear cube</em> action to clear the previous flag in <code>BUD Workflow Flag</code>.</p>
                        },
                        {
                            instructionJsx: <p>Return to the screen and test that a rejected budget can now be reopened. Using both Customer Budget and Manager Review screens, test that a Sales Person workflow can move through all the stages correctly.</p>
                        },
                        {
                            instructionJsx: <p>Open the <code>Sales Planning Home</code> screen. Add <em>layouts</em> to the four small <em>labels</em> under the text Progress Monitor to display the number of Sales Persons who are at each stage of the budget process. Remove the <em>hide zeroes</em> settings from the block to prevent 0 showing as N/A</p>,
                            hintJsx: <p>BUD Workflow Status Flag will provide a count of the number of Sales Persons at each stage. Use a <em>layout select</em> in each layout to select the relevant Workflow Status</p>
                        }
                    ]
                },
                { 
                    name: 'Forecast Snapshot',
                    objective: 'Implement a process to take a snapshot of the current budget and actual data to create an ‘in-year’ rolling forecast. Structure the data so multiple forecasts can be saved over time.',
                    tasks: [
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>entity</em> called <code>Forecast Snapshot</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: Admin</li>
                                        <li>Code width: 2</li>
                                        <li>Desc width: 30</li>
                                        <li>Max item no.: 50</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx: <p>Manually populate the entity with the first member: <code>01 FY Budget 2021</code></p>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Create a new <em>cube</em> called <code>FCT Net Sales</code> with the following properties:</p>
                                    <ul>
                                        <li>Group: PLN Revenue</li>
                                        <li>Data type: Double</li>
                                        <li>Dimensions: Month, Product, Branch, Forecast Snapshot</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Create two new <em>cubes</em> called <code>FCT Month Flag</code> and <code>ACT Month Flag</code> both with the following properties:</p>
                                    <ul>
                                        <li>Group: Admin</li>
                                        <li>Data type: Integer</li>
                                        <li>Dimensions: Month, Forecast Snapshot</li>
                                    </ul>
                                </div>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Open screen <code>Forecast Snapshot</code>. Configure the <em>data view</em> with the following blocks:</p>
                                    <ul>
                                        <li>Data: BUD Net Sales</li>
                                        <li>Data: Net Sales</li>
                                        <li>Data: FCT Month Flag, <em>data entry </em> enabled, <em>appearance</em> as <code>checkbox</code></li>
                                        <li>Data: ACT Month Flag, <em>data entry </em> enabled, <em>appearance</em> as <code>checkbox</code></li>
                                        <li>Data: FCT Net Sales</li>
                                    </ul>
                                    <p>Set Month on the row axis.</p>
                                </div>
                        },
                        {
                            instructionJsx: <p>Set the <em>entity editor</em> object to the <code>Forecast Snapshot</code> entity. In <em>ATO entities configuration</em>, allow <em>insert/edit member</em> with the <em>auto-incremental</em> setting. This means a user can create a new entity member by just entering the description and the code will automatically be assigned the next available value in a numerical sequence.</p>
                        },
                        {
                            instructionJsx: <p>Switch to play mode and select <code>FY Budget 2021</code> from the entity editor. For this snapshot, all twelve months of the year are forecast months so enter the flags accordingly.</p>,
                            hintJsx: <p>All months should be flagged in the FCT Month Flag cube, by clicking the checkbox</p>
                        },
                        {
                            instructionJsx: <p><em>Reset</em> the entity editor, then <em>add a new member</em> to Forecast Snapshot called <code>Forecast 2021 4+8</code></p>
                        },
                        {
                            instructionJsx: <p>For this snapshot, Jan-21 to Apr-21 should be flagged as actual months and May-21 to Dec-21 should be flagged as forecast months</p>
                        },
                        {
                            instructionJsx: <p>Create a procedure called <code>11.1 Take Forecast Snapshot</code></p>
                        },
                        {
                            instructionJsx: <p>Add an <em>interactive selection</em> on entity <code>Forecast Snapshot</code> to allow the user to choose which snapshot to save to</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>select based on cube</em> action to select only the months that are flagged as actual months for that Forecast Snapshot.</p>,
                            hintJsx: <p>The select based on cube action should use ACT Month Flag</p>
                        },
                        {
                            instructionJsx: <p>Add a <em>data flow</em> action to copy data from <code>Net Sales</code> to <code>FCT Net Sales</code> for those months</p>
                        },
                        {
                            instructionJsx: <p>Add another <em>select based on cube action</em> to select only the months that are flagged as forecast months for that Forecast Snapshot</p>
                        },
                        {
                            instructionJsx: <p>Add another <em>data flow</em> action to copy data from <code>BUD Net Sales</code> to <code>FCT Net Sales</code> for those months</p>
                        },
                        {
                            instructionJsx: <p>Return to the screen and set the Take Forecast Snapshot button to run the procedure</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure for the <code>Forecast 2021 4+8</code> snapshot. Check that the values in FCT Net Sales are the correct combination of actuals and budget.</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure again for <code>FY Budget 2021</code>. Note that a <em>message icon</em> appears in top-right of the screen. The message will inform you that the procedure has failed. This is because of the select based on cube action for the actual months causing an <em>empty selection</em>.</p>
                        },
                        {
                            instructionJsx: <p>Edit the procedure, inserting <em>if then else</em> actions to check the ACT Month Flag and FCT Month Flag cubes and skipping the relevant actions if they are empty. You will need to remove the selection on Month between the two if then else actions, otherwise the second one may not be checking all months.</p>,
                            hintJsx: <p>The select based on cube and data flow actions should be placed inside groups. Each if then else should check if the relevant flag cube is {'>'} 0, meaning there is at least one month flagged. If so, the group can be executed. Use the <em>get back</em> option to then continue the procedure.</p>

                        },
                        {
                            instructionJsx: <p>Rerun the procedure for FY Budget 2021 and check it now works correctly</p>
                        },
                        {
                            instructionJsx: <p>Add another Forecast Snapshot member called <code>Forecast 2021 5+7</code>, assign the correct flags and run the procedure to take the snapshot</p>
                        }
                    ]
                },
                {
                    name: 'Forecast Variance',
                    objective: 'Create a report to allow comparison between two forecast snapshots',
                    tasks: [
                        {
                            instructionJsx: <p>Open screen <code>Forecast Variance</code>. Set the <em>selector</em> to the Forecast Snapshot entity and select <code>Forecast 2021 5+7</code></p>
                        },
                        {
                            instructionJsx:
                                <div>
                                    <p>Configure the <em>data view</em> with the following blocks:</p>
                                    <ul>
                                        <li>Data: FCT Net Sales</li>
                                        <li>Data: FCT Net Sales, with <em>block reference</em> on Forecast Snapshot = <code>FY Budget 2021</code>. Set the <em>heading</em> to <code>@Selection</code> to return the description of the snapshot in the block header.</li>
                                        <li>Algorithm calculating the variance between the two forecasts</li>
                                        <li>Algorithm calculating the percentage variance between the two forecasts</li>
                                    </ul>
                                    <p>Set Continent and Country on the rows and Product Division on the columns</p>
                                </div>
                        },
                        {
                            instructionJsx: <p>Create a new procedure called <code>11.2 Select Comparative Snapshot</code>. This must be a <em>capsule procedure</em>.</p>
                        },
                        {
                            instructionJsx: <p>Start with an action to <em>reset the entire selection</em> coming from the screen</p>
                        },
                        {
                            instructionJsx: <p>Add an <em>interactive selection</em> step on Forecast Snapshot, to allow the user to select the comparative snapshot</p>
                        },
                        {
                            instructionJsx: <p>Add an <em>apply selection to layout block</em> action to apply this selection to the <em>@Selection</em> block</p>,
                            hintJsx: <p>The specific screen (Forecast Variance), layout and block must be specified to inject the selection to</p>
                        },
                        {
                            instructionJsx: <p>Return to the screen and set the Select Comparative Snapshot button to run the procedure</p>
                        },
                        {
                            instructionJsx: <p>Run the procedure and select <code>Forecast 2021 4+8</code>. Check that the report updates correctly.</p>
                        }
                    ]
                }
            ]
        },
        {
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
                        
                    ]
                }
            ]
        }
    ]
}

export default Training;