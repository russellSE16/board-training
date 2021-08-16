import React from 'react';

export const course = {
    title: 'data-modelling',
    exercises: [
        {
            name: 'Create New Board Data Model',
            objective: 'Create a new Board data model as the basis for a new Sales Reporting & Planning application',
            tasks: [
                {
                    instructionJsx: <p>Logon to <em>Board</em> using the appropriate credentials</p>
                },
                {
                    instructionJsx: <p>From the Board button in the top-left of the screen, navigate to <em>data model</em> and create a new database called <code>Training_[your initials]</code></p>,
                    hintJsx: <p>Click on the + icon to create a new data model</p>
                },
                {
                    instructionJsx: <p>Set the <em>from year</em> and <em>to year</em> as <code>2017</code> and <code>2022</code> respectively</p>,
                    infoJsx: <p>This defines the time range for which data can be loaded into the database. It can easily be moved forward incrementally whenever necessary so it should be initially defined as the time period for which data is required on the initial deployment.</p>
                },
                {
                    instructionJsx: <p>Enable all of the <em>time range</em> options (Day, Week, Quarter, Fiscal year), setting the Fiscal year <em>beginning on</em> to <code>April</code> and leaving the other additional options as the default setting</p>,
                    infoJsx: <p>These settings define the granularity of data that is available in terms of time. Some of them can be customized, for instance the format with which a fiscal year is displayed.</p>
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
                    instructionJsx: <p>Open <em>SQL Server Management Studio</em> and connect to the server using the saved credentials. Note you may need to connect to the server remotely in order to do this.</p>,
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
                    instructionJsx: <p>Return to Board and navigate to <em>Entities</em> in your newly created data model. Click <em>+ entity</em> to create a new entity within it.</p>,
                    infoJsx: <p>An entity is a list of homogenous items that describe how you can analyze your data.</p>
                },
                {
                    instructionJsx: <p>Create Product entities (<code>Product</code>, <code>Product Group</code>, <code>Product Division</code>) with the <em>group</em> set to <code>Product</code>. Set appropriate <em>code width</em> and <em>desc width</em> for each. Set the <em>max item number</em>, using the <code>auto</code> setting for the Product entity. For the parent entities, set it manually at an appropriate level. Reference should me made to the SQL tables for these settings, making some assumptions on how much the entity members might grow over the life of the application.</p>,
                    image: 'product-hierarchy.png',
                    imageAlt: 'Hierarchy diagram showing Product, Product Group and Product Division, each one a parent of the previous one.',
                    hintJsx: 
                        <div>
                            <p>The following settings are suggested:</p>
                            <table>
                                <tr>
                                    <th>Entity</th>
                                    <th>Code width</th>
                                    <th>Desc width</th>
                                    <th>Max item</th>
                                </tr>
                                <tr>
                                    <td>Product</td>
                                    <td>3</td>
                                    <td>50</td>
                                    <td>Auto</td>
                                </tr>
                                <tr>
                                    <td>Product Group</td>
                                    <td>2</td>
                                    <td>50</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Product Division</td>
                                    <td>2</td>
                                    <td>50</td>
                                    <td>10</td>
                                </tr>
                            </table>
                        </div>,
                    infoJsx: <p>The auto setting for max item no. should be used where the number of entity members and their future growth is highly uncertain. Where a sensible maximum can be set with a reasonable level of confidence that it will not be exceeded over the life of the application, it should be set manually.</p>
                },
                {
                    instructionJsx: <p>Create Branch entities (<code>Branch</code>, <code>Customer</code>, <code>Branch Country</code>, <code>Customer City</code>, <code>Customer Country</code>, <code>Sales Person</code>, <code>Area Manager</code>) in a group called <code>Branch</code> with appropriate settings. For <em>max item number</em>, use <code>auto</code> for Branch and Product and set the rest of the entities manually</p>,
                    image: 'branch-hierarchy.png',
                    imageAlt: 'Hierarchy diagram showing Branch, Customer, Customer City, Customer Country as one path. Branch, Customer, Sales Person, Area Manager as another path. Branch, Branch Country as the final path.',
                    hintJsx:
                    <div>
                    <p>The following settings are suggested:</p>
                    <table>
                        <tr>
                            <th>Entity</th>
                            <th>Code width</th>
                            <th>Desc width</th>
                            <th>Max item</th>
                        </tr>
                        <tr>
                            <td>Branch</td>
                            <td>5</td>
                            <td>50</td>
                            <td>Auto</td>
                        </tr>
                        <tr>
                            <td>Customer</td>
                            <td>5</td>
                            <td>50</td>
                            <td>Auto</td>
                        </tr>
                        <tr>
                            <td>Branch Country</td>
                            <td>3</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Customer City</td>
                            <td>20</td>
                            <td>20</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>Customer Country</td>
                            <td>3</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Sales Person</td>
                            <td>2</td>
                            <td>50</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Area Manager</td>
                            <td>2</td>
                            <td>50</td>
                            <td>20</td>
                        </tr>
                    </table>
                </div>
                },
                {
                    instructionJsx: <p>Create <code>Shipper</code> entity, with <em>max item number</em> set to <code>auto</code> and appropriate settings for the widths.</p>
                },
                {
                    instructionJsx: <p>Navigate to <em>Relationships</em> and configure the relevant hierarchies. Drag a parent entity and drop it onto the appropriate child entity to set the relationship. When finished, remember to click <em>save changes</em>.</p>,
                    hintJsx: <p>Use the diagrams above to inform how the entities are related in each hierarchy</p>,
                    infoJsx: <p>Relationships in Board must adhere to a n:1 connection between entity members. That is to say that each member of a child entity can belong to only one member of the parent entity. However each member of a parent entity can have assigned as many members of the child entity as needed.</p>
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
                    instructionJsx: <p>Click the connection icon to connect to the Northwind SQL <em>data source</em> and then navigate to <em>mapping</em></p>,
                    infoJsx: <p>Every time a data reader is created or edited, the connection to the data source must be established in this way.</p>
                },
                {
                    instructionJsx: <p>From the <em>MDB</em> list, drag both <em>code</em> and <em>description</em> elements of each entity in the Product group to the <em>mapping</em> window</p>,
                    infoJsx: <p>The MDB list shows all of the individual elements in the Board data model that can be loaded via data reader.</p>
                },
                {
                    instructionJsx: <p>From the <em>RDB</em> list, drag the corresponding table fields to mapping window. This will construct a SQL query automatically.</p>,
                    hintJsx: <p>The required fields are found in the tables <code>dbo.Product</code> and <code>dbo.Product_Group</code></p>,
                    infoJsx: <p>The RDB list shows the elements from the data source, such as tables and views.</p>
                },
                {
                    instructionJsx: <p>Navigate to <em>join</em> and set the fields on which to join the two tables required for this query</p>,
                    hintJsx: <p>The fields are <code>dbo.Product.c_Productgroup</code> and <code>dbo.Product_Group.c_Productgroup</code></p>,
                    infoJsx: <p>When joining tables using the SQL auto-generator, the type of join will be an <em>inner join</em>.</p>
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
                    instructionJsx: <p>Create a new data reader called <code>TREE-Branch</code> to load the Branch entities, their descriptions (excluding the description for Area Manager) and the relationships between them. For the description field of the Sales Person entity, two fields will need to be concatenated. You cannot drag two RDB items to the same MDB item so click into the field to manually type the SQL expression. See the hint for syntax.</p>,
                    hintJsx: <p>The required fields are found in the tables <code>dbo.Customer</code> and <code>dbo.Employee</code>, which should be joined on the common field <code>c_Employee</code>. The syntax to concatenate two fields with a space in between is <code>[field1] + ' ' + [field2]</code>.</p>
                },
                {
                    instructionJsx: <p>Run the TREE-Branch data reader and check that the relevant entities and relationships have been populated as expected</p>
                },
                {
                    instructionJsx: <p>Create a new data reader called <code>ENT-Area Manager Desc</code> to load the correct descriptions for the Area Manager entity. Ensure that this data reader does not allow new items to be added to the entity but does replace the blank descriptions for members loaded in the TREE-Branch data reader.</p>,
                    hintJsx: <p>The Area Manager names (descriptions) are in the same field as the Sales Person descriptions. The <em>mode</em> of the Area Manager code item should be set to <code>discard new item</code> so that all the sales person employees are not added as area managers. The mode of the description should be set to <code>replace</code> so the name is added.</p>,
                    infoJsx: <p>Discard new item mode means that a record from the query results will be completely discarded if the code does not match with an existing member of the entity in question.</p>
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
            name: 'Configure Cubes',
            objective: 'Create the data model objects that will store the sales measures data at the optimal level of granularity',
            tasks: [
                {
                    instructionJsx: <p>Navigate to <em>Cubes</em> within your data model. Click <em>+ cube</em> to create a new cube.</p>,
                    infoJsx: <p>A cube is the element of the data model that holds data, usually data that relates to a particular <em>measure</em>. It is dimensioned by one or more entities, which define how the data is stored and can be reported and summarized.</p>
                },
                {
                    instructionJsx: <p>Create a cube named <code>Sales Volume</code>. Assign to a <em>group</em> called <code>Sales</code> and set <em>data type</em> as <code>double</code>. Set the <em>dimensions</em> as Day, Product, Branch and Shipper. Save the cube to create it.</p>,
                    infoJsx: <p>The data type defines the type of data that can be stored in the cube. There are four numerical data types which hold values to various levels of precision i.e. they will be rounded once the specified precision is reached.</p>
                },
                {
                    instructionJsx: <p>Create three more cubes to measure sales. Name them <code>Net Sales</code>, <code>Net Sales at Markdown Price</code>, <code>Net Sales at Std Price</code>. Configure these cubes with all of the same settings as the first one.</p>,
                    hintJsx: <p>Use the <em>copy from</em> button to take all of the settings from the Sales Volume cube</p>
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
                    instructionJsx: <p>In mapping, drag the cubes one by one to the mapping window. The entities that comprise the dimensions of the cubes will be added automatically.</p>,
                    infoJsx: <p>The cube field provides the value to be stored in the cube and the entity fields inform the position, with regards to its dimensions.</p>
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
                    hintJsx: <p>For the entity items in the data reader, <em>reject</em> mode should be used to ensure master data is not affected. For the cube items, <em>replace time slice</em> mode will ensure the cubes are first cleared for the time period being loaded, before latest data is loaded.</p>
                },
                {
                    instructionJsx: <p>Save and run the CUBES-Net Sales data reader. Navigate to <em>Logs</em> to check the correct number of records have been read and validated.</p>,
                    infoJsx: <p>The database log records actions that take place on the data model, such as the execution of a data reader. The most recent action will be listed at the bottom of the log.</p>
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
                    instructionJsx: <p>On the newly created Home <em>screen</em>, drag a new <em>data view</em> object from the <em>toolbox</em> to the workspace. From the left-hand side vertical menu, the toolbox is the second tab.</p>
                },
                {
                    instructionJsx: <p>On the data view object, click <em>configure me</em> to open the <em>layout</em> designer and configure the data to query and display</p>
                },
                {
                    instructionJsx: <p>In the <em>data</em> menu, open the Sales group to reveal the four <em>cubes</em> created previously. Drag each of these one by one to the <em>data</em> area of the layout.</p>,
                    infoJsx: <p>Each item shown in the data area is known as a <em>block</em> - think of this a specific piece of data to display.</p>
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
                    instructionJsx: <p>For the cube value field, hard code a <code>1</code> into the query, ensuring that each record is effectively counted in the cube</p>,
                    infoJsx: <p>For numerical cubes, Board automatically aggregates all incoming data in the relevant position in the cube.</p>
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
                    instructionJsx: <p>Set the <em>source folder/URL</em> with <em>path</em> <code>C:\Board\Dataset\DB Training</code> and <em>pattern</em> <code>Working hours*.csv</code>. Set the <em>CSV delimiter</em> to <code>,</code>. The file should appear in the list, click the connection icon to connect to it.</p>,
                    infoJsx: <p>The source location and pattern determines which files the data reader is able to pick up. The * wildcard can be used in the pattern, which will allow any filename matching the rest of the pattern.</p>
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
                    instructionJsx: <p>Select <code>_Time1</code> entity and rename it to <code>Weekday</code>. Set the <em>code width</em> to <code>1</code> and the <em>description width</em> to <code>10</code> and save changes.</p>,
                    infoJsx: <p>There are a limited number of custom time entities that can be configured and used within the time hierarchy.</p>
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
                    instructionJsx: <p>Click on the Day entity and <em>extract</em> it – this will output it to a text file on the server</p>,
                    infoJsx: <p>Any entity can be extracted in this way - the file will list all of the members' codes and descriptions.</p>
                },
                {
                    instructionJsx: <p>Create a new text file data reader called <code>REL-Day to Weekday</code>. Connect to the extracted Day entity text file, <code>A007.csv</code>, and navigate to <em>mapping</em>. Map both the Day and Weekday entities to the first field in the file (Day).</p>,
                    hintJsx: <p>Only the code fields of the entities are needed for mapping relationships</p>
                },
                {
                    instructionJsx: <p>Navigate to <em>ETL</em>. Enable <em>show formulas</em> to transform the data before loading. In cell D4 (file output for loading to Weekday entity) write the formula <code>=WEEKDAY(C4,2)</code>. This function will translate the date from the extracted Day entity into a number representing the day of the week running Monday to Sunday.</p>,
                    infoJsx: <p>ETL allows you to perform transformations on the data from the incoming file. The input column shows the raw data from the file and the output column shows what will be read to Board for each field when the data reader is executed.</p>
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
                    instructionJsx: <p>Return to relationships in the data model and run the <em>analyze</em> function. Note that there are missing relationships between Product and Product Category. Click on the row for <em>missing parent</em>.</p>,
                    infoJsx: <p>The analyze function scans the data model for missing relationships. This could be a member of a child entity that has no parent assigned or a member of a parent entity that has no children.</p>
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
                    instructionJsx: <p>In relationships, run the <em>analyze</em> function again. Note that although the Customer Country to Continent relationships have been set, all other relationships to Continent within the Branch hierarchy are still missing.</p>,
                    infoJsx: <p>When loading a hierarchy through a data reader, this will assign both direct and indirect relationships between all entities contained in that data reader. If part of a hierarchy is managed outside of a data reader, the indirect relationships may need to be <em>normalized</em> to ensure they are correctly set.</p>
                },
                {
                    instructionJsx: <p>Open the <em>normalize</em> configuration and enable the <em>do</em> option for all indirect relationships to Continent (Branch, Customer and Customer City). Ensure the <em>through</em> option for each is set to Customer Country, so the relationship is normalized using the relationship that has now been set manually. <em>Save</em> the settings, then click <em>go</em> to run the process.</p>
                },
                {
                    instructionJsx: <p>Run the analyze function again to verify that all issues in the Branch hierarchy are resolved, with the exception of one of the Product Categories which has no children (this will be resolved later when new products are created)</p>
                },
                {
                    instructionJsx: <p>Refresh the data view in the capsule to check the report now displays data by Continent as expected</p>
                }
            ]
        },
        {
            name: 'Configure Sparsity',
            objective: 'Sparsity is a concept within Board that allows for more efficient storage of data within a data model and, as a result, significantly faster query and data processing times. Board will automatically configure the sparse dimensions in cubes but it is possible to set them manually.',
            tasks: [
                {
                    instructionJsx: <p>Click on the <em>structure</em> tab of the Net Sales cube. Note that Board has set the Product, Branch and Shipper dimensions as <em>sparse</em>, denoted by the <code>S</code> icon.</p>,
                    infoJsx: <p>Time dimensions are always set to <em>dense</em></p>
                },
                {
                    instructionJsx: <p>Click on the <code>S</code> icon next to Shipper. This will remove the dimension from the structure. Click again to set it as a <em>dense</em> dimension.</p>
                },
                {
                    instructionJsx: <p>On saving the changes, this action will clear all data from the cube. Rerun the relevant data reader to reload it from the SQL database.</p>
                },
                {
                    instructionJsx: <p>Return to cubes, note that the <em>file size</em> of the cube is now greater than the other cubes loaded from the same source, as Shipper has been removed form the sparse combination</p>
                },
                {
                    instructionJsx: <p>Navigate to entities and click on Shipper. Click the <em>analysis</em> tab and click on <em>cubes</em> to show all the cubes this entity is used in as a dimension. Note that in the Net Sales cube, the max item number is much higher than the others. This is because for entities using auto max items, a limit is placed when the entity is used in a sparse combination.</p>,
                    infoJsx: <p>This limit to max item number is there to keep the number of possible combinations in the cube's sparse structure to within 64 bit (i.e. 2<sup>64</sup>)</p>
                },
                {
                    instructionJsx: <p>Check the same for Product and Branch entities. Note that the max item numbers are also higher for Net Sales as removing Shipper from the sparse structure allows for more members in the remaining Product-Branch sparsity</p>
                }
            ]
        },
        {
            name: 'Configure Secondary Versions',
            objective: 'Cube versions allow data in numerical cubes to be pre-aggregated and the data stored a more summarized level, improving query times on commonly used reports. The sales cubes in this data model are defined at a very detailed level, so secondary versions would optimize it for high-level reporting.',
            tasks: [
                {
                    instructionJsx: <p>Add a new <em>version</em> to the Sales Volume cube to pre-aggregate the data at a commonly used level: <code>Month</code>, <code>Product Group</code>, <code>Customer Country</code></p>,
                    hintJsx: <p>Click on the cube name, navigate to <em>versions</em> then click <code>+</code> to create a new cube version, defining the dimensions in the normal way</p>
                },
                {
                    instructionJsx: <p>In the Data Validation capsule, configure a data view showing the Sales Volume data at this aggregated level, or a more aggregated level. Note that no data is returned. This is because the new version has not been populated with data.</p>,
                    hintJsx: <p>Set any of Month, Product Group and Customer Country on the axes, or any of their parents such as Year or Product Division</p>
                },
                {
                    instructionJsx: <p>Amend the data view layout to use a dimension more granular than used in the new cube version (e.g. Customer City instead of Customer Country). Note that data is now returned – Board automatically picks the appropriate version for the layout configuration.</p>
                },
                {
                    instructionJsx: <p>Return to the Sales Volume cube in the data model. In the <em>properties</em> tab, open the <em>versions</em> list to see the stored versions. Click <em>verify</em> to confirm that the new version has no data (<em>checksum</em> will show the total of all values stored in a cube version).</p>
                },
                {
                    instructionJsx: <p>On the new version, run the <em>align</em> process to pre-aggregate data from the primary version and store it in the secondary version</p>,
                    infoJsx: <p>If a cube is loaded using a data reader, this will automatically load data to all versions, so aligning is not necessary.</p>
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
                    instructionJsx: <p>Configure three new <em>data readers</em> to load this cube. A <em>view</em> <code>dbo.Net_Sales</code> has been created in the SQL database to more easily obtain the Net Sales measures. Map the dimensions and the relevant field in this view to the correct slice of the Sales Report Line dimension by hard coding the code for that entity slice into the data reader query.</p>,
                    hintJsx: <p>Map the Day, Branch, Product and Shipper dimensions to the same fields as before. To hard-code, type the code for the Sales Report Line entity slice into the RDB item field, in quote marks, e.g. <code>'01'</code></p>
                },
                {
                    instructionJsx: <p>Consider the <em>mode</em> that should be used in these data readers. When multiple data readers load to the same cube, <code>replace time slice</code> option will always clear data from the previous data reader if it relates to the same time period (even if it is loading a different slice on another dimension).</p>,
                    hintJsx: <p>One option here would be to set <code>replace time slice</code> on one of the three data readers and set <code>add</code> on the other two. They would need to be run in the correct order so that the replace one runs first, clearing data from a previous load, then the other two run without clearing.</p>
                },
                {
                    instructionJsx: <p>Run the three data readers and verify the correct number of records were loaded.</p>
                },
                {
                    instructionJsx: <p>Return to the Sales Report screen in the capsule. Add a new data view, configured with the Sales Report cube data, Sales Report Line entity on the <em>row axis</em> and Quarter on the <em>column axis</em>. In <em>axis settings</em>, disable the option <em>down totals</em>. Save the layout. This report should now mirror part of the report from the first data view.</p>
                },
                {
                    instructionJsx: <p>In the data model, navigate to <em>Rules</em>. Create a new <em>rule</em> called <code>Sales Report Calcs</code>, setting it to the Sales Report Line <em>entity</em>.</p>,
                    infoJsx: <p>A rule allows for calculations to be defined within an entity, referencing the data for other entity members in the calculation.</p>
                },
                {
                    instructionJsx: <p>Write the correct formulas to calculate Markdown, Discount, Total Deduction and Total Deduction %. Formulas can refer to other members of the Sales Report Line entity by putting their codes in square brackets e.g. <code>[01] – [02]</code>. The net sales lines should be left empty. Save changes when done.</p>
                },
                {
                    instructionJsx: <p>In the data view layout, click on the Net Sales data block and from the right-hand configuration menu, apply this new rule to it. The values in the report should now match the first data view.</p>,
                    hintJsx: <p>To apply the rule, activate the <em>rules</em> option from the right-hand menu and choose the rule to apply from the drop-down</p>,
                    infoJsx: <p>Applying a rule to a data block requires the entity used in the rule to be shown on the row axis. For each row, the value(s) shown will either be taken from the cube used in the data block (if there is no formula present in the rule) or the result of the rule formula.</p>
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
                    hintJsx: <p>Assuming the code for Net Sales at Std Price is <code>01</code> and the code for Net Sales at Markdown Price is <code>02</code>, the formula for Net Sales at Markdown Price should be <code>[.02]/[.01]*100</code></p>,
                    infoJsx: <p>The . before the code indicates that this formula should calculate using the data from the previous block in the layout to which the rule is applied. Two ..s would calculate from two blocks previous. A . after the code would calculate from the next block.</p>
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
            objective: 'An advanced functionality of rules is called the data picker, which allows the formulas to not only reference other entity members but also specific cubes. This exercise shows how this can be used to remove the need for loading duplicate data into the Sales Report cube.',
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
                    hintJsx: <p>The OrderDate field in dbo.Orders can easily be mapped to the Month entity; the SQL to convert the date to a the relevant month is automatically generated.</p>,
                    infoJsx: <p>Mapping a dimension in the protocol means that the drill can be run from any report that uses that entity or any of its parents. It also means any selections applied will be reflected in the results.</p>
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
            name: 'Configure an Unbalanced Hierarchy',
            objective: 'A standard Board hierarchy is created bottom-up (i.e. from the most granular level up to the most summarized). Board can also create unbalanced hierarchies for top-down structures. In this exercise, a business unit hierarchy will be created for importing of expenses data across the organization.',
            tasks: [
                {
                    instructionJsx:
                        <div>
                            <p>Create a new <em>entity</em> called <code>Business Unit</code> with the following attributes:</p>
                            <ul>
                                <li>Group: Organization</li>
                                <li>Code width: 5</li>
                                <li>Desc width: 50</li>
                                <li>Max item no.: 1000</li>
                            </ul>
                            <p>Activate the <em>unbalanced hierarchy</em> option.</p>
                        </div>
                },
                {
                    instructionJsx: <p>Create a <em>SQL data reader</em> called <code>ENT-Business Unit</code>. Configure this to populate the entity's code and description from the table <code>dbo.Organization</code>. Once saved, run the data reader.</p>
                },
                {
                    instructionJsx: <p>Navigate to <em>relationships</em> and click on the Business Unit entity. Unlike normal entities, an entity using unbalanced hierarchy can set relationships within itself. View the relationships between Business Unit and itself. Assign the first three members (with codes beginning 1xxxx) to the parent member <code>Group Executive</code>. Note that these child members are now nested underneath the parent.</p>
                },
                {
                    instructionJsx: <p>Create another <em>data reader</em> called <code>REL-Business Unit</code> to load the relationships within the Business Unit entity from the same table, dbo.Organization. The immediate parent for each member should be assigned. Set the <em>mode</em> on the code field to <code>add new item</code>.</p>,
                    hintJsx: <p>For entities using unbalanced hierarchy, a third type of MDB item is available in the data reader for loading the immediate parent of each member.</p>,
                    infoJsx: <p>It is recommended to have separate data readers for populating the unbalanced hierarchy entity and setting the relationships. Although it can be done in one data reader, if a parent and child member are being added at the same time, this may result in the relationship not being set if the child member is loaded before the parent.</p>
                },
                {
                    instructionJsx: <p>Run this data reader and then inspect the relationships for Business Unit again, noting that the members are now organized into a top-down hierarchy</p>,
                    infoJsx: <p>For unbalanced hierarchies, it is valid if one or more members has no parent. This designates the member(s) as the root element at the top of the hierarchy.</p>
                },
                {
                    instructionJsx:
                        <div>
                            <p>Create a new cube called <code>Department Expenses</code> with the following attributes:</p>
                            <ul>
                                <li>Group: Finance</li>
                                <li>Data Type: Double</li>
                                <li>Dimensions: Month, Business Unit</li>
                            </ul>
                        </div>
                },
                {
                    instructionJsx: <p>Create a new <em>text data reader</em> to load this cube from an extract from the accounting system. This can be found at <code>C:\Board\Dataset\DB Training\NW Grp Expenses.csv</code>. Note that this file is <em>tab delimited</em>. Run the data reader to load the cube.</p>,
                    hintJsx: <p>In the <em>source options</em> for the data reader, ensure the <em>csv delimiter</em> is set to <code>tabulator</code></p>
                },
                {
                    instructionJsx: <p>In the Data Validation capsule create a data view to inspect the data in this cube with Business Unit on the rows and Fiscal Year on the columns. Note that the data view automatically organizes the rows using the unbalanced hierarchy, rolling up the leaf levels to their parents.</p>
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
                                <li><em>Cube Type</em>: RDB</li>
                                <li>Dimensions: Product</li>
                            </ul>
                        </div>
                },
                {
                    instructionJsx: <p>Click <em>RDB query</em> and connect to the Northwind SQL data source. In the <em>mapping</em> window, map the relevant fields from the dbo.Product table in the database.</p>
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
                    instructionJsx: <p>The text comments should now be shown with a yellow background, meaning they can be edited. Change one of the comments and click the tick icon to <em>save data entry</em>.</p>
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
                    instructionJsx: <p>Add a new <em>database security profile</em> called <code>ADMIN</code>. This should be configured with <em>security system</em> set to <code>builder</code> and <em>access mode</em> set to <code>database administrator</code>. This will ensure that you as the developer have full access to the data model.</p>,
                    infoJsx: <p>Database security profiles govern who can access the data model, both in terms of viewing data through the capsule and in terms of modifying the data model. A developer licence would also be required for the latter. A user with a developer licence could also be restricted to end user access on a particular data model.</p>
                },
                {
                    instructionJsx: <p>Add another new security profile called <code>SALES</code>. This should be configured with security system set to <code>access denied</code> and access mode set to <code>read and write</code>. This is the profile to be used by end users in the sales team.</p>
                },
                {
                    instructionJsx: <p>From the main menu, navigate to <em>System Administration</em> and then to <em>Profiles</em> under the <em>Security</em> heading</p>,
                    infoJsx: <p>This area manages security for the entire Board server, not just an individual data model.</p>
                },
                {
                    instructionJsx: <p>Create a new <em>security profile</em> called <code>sales</code>. This should be configured with a <em>licence</em> type of <code>user</code> and within <em>data models</em>, a <em>default database security profile</em> of <code>SALES</code>. Save the profile. This will establish users as an end-user with read and write access and grant them access to the Training data model.</p>
                },
                {
                    instructionJsx: <p>Navigate to <em>Users</em> under the <em>Security</em> heading</p>
                },
                {
                    instructionJsx: <p>Create a new <em>user</em> for one of the sales persons. This should be configured with the <em>security profile</em> set to <code>sales</code> and <em>user authentication type</em> as <code>password</code>. Enter a password for this user to login with.</p>
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
};
