import React from 'react';

export const course = {
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
                    instructionJsx: <p>Add further steps for the Branch hierarchy (including Area Manager description), the Shipper entity and the Business Unit hierarchy</p>,
                    hintJsx: <p>Protocols <code>TREE-Branch</code>, <code>ENT-Area Manager Desc</code>, <code>ENT-Shipper</code>, <code>ENT-Business Unit</code> and <code>REL-Business Unit</code> should be run</p>
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
                    instructionJsx: <p>Create another new procedure called <code>01.3 Load Expenses</code>. This will be designed to incrementally load the expenses each month, received as a CSV file from Accounting.</p>
                },
                {
                    instructionJsx: <p>Add a step to run the text data reader protocol <code>CUBE-Department Expenses</code>. Unfortunately the data reader is not configured to look in the correct location for the file that has been agreed with Accounting. Save the procedure and navigate to <em>data reader</em> in the data model.</p>
                },
                {
                    instructionJsx: <p>Edit the CUBE-Department Expenses data reader, amending the <em>path</em> to look at <code>C:\Board\Dataset\PR Training</code>. Accounting have agreed to name the files with the month the relate to at the end of the filename. Add a <code>*</code> to the <em>pattern</em> after NW Group Expenses so the data reader will pick up the file regardless of this month suffix.</p>,
                    hintJsx: <p>The pattern should be <code>NW Grp Expenses*.csv</code></p>
                },
                {
                    instructionJsx: <p>Return to the procedure and edit the text file data reader step. Set the <em>path/file</em> to <code>all</code> to ensure the procedure picks up all files with the correct filename pattern.</p>,
                    infoJsx: <p>Note that the procedure could also have loaded the files from the new location without amending the data reader. Clicking the pencil icon next to <em>path/file</em> allows typing of a different filepath and filename to what is configured in the protocol. The * wildcard can be used here as well.</p>
                },
                {
                    instructionJsx: <p>In the Data Loading screen, set the procedure to the Load Expenses button and switch to play mode to test it</p>
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
                    instructionJsx: <p>Add three <em>members</em> manually to represent the two loading tasks (hierarchies, sales orders and expenses)</p>,
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
                    instructionJsx: <p>Edit procedures 01.1, 01.2 and 01.3, adding actions to first <em>select</em> the relevant Task and then run a <em>data flow</em> action to record the current date and time in the Last Run cube.  Use <em>substitution formula</em> <code>@datetime</code> as the data flow <em>expression</em> and under <em>calculation domain</em> enable the option to <em>extend</em> the calculation on all new <em>tuples</em> of the Task entity.</p>,
                    hintJsx: <p>Click <em>edit layout</em> to retrieve the Last Run cube for the data flow, dragging it into the layout configuration. Set it as the <em>target</em> and set the target to equal the <code>@datetime</code> expression.</p>
                },
                {
                    instructionJsx: <p>In the Data Loading screen, add a <em>layout</em> to the buttons to display the relevant information from the Last Run cube. Use a <em>layout select</em> to bring through the correct date to each one.</p>
                },
                {
                    instructionJsx: <p>Switch to play mode and run the three load procedures again, noting the recorded date and time</p>
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
                    instructionJsx: <p>Add a <em>data flow</em> step to copy the previous year data from <code>Sales Volume</code> into <code>BUD Sales Volume</code></p>
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
                },
                {
                    instructionJsx: <p>Remove all values from one of the Product Groups' seasonal profiles and run the procedure again. Note that no error is shown this time and the calculation goes ahead.</p>
                },
                {
                    instructionJsx: <p>In the first data flow calculating the TEMP Seasonal Profile Check cube, set the <em>calculation domain</em> to <em>extend</em> calculation to new tuples on all members of the Product Group entity. This will ensure the error flag is written even in the case that there is no profile in BUD Seasonal Profile. Rerun the procedure to check the error is now shown.</p>
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
                            <p>Put Product and Product Group on the row axis, remove <em>down totals</em> and set all blocks to display <code>2</code> <em>decimal digits</em></p>
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
                    instructionJsx: <p>Add a <em>data flow</em> action that <em>calculates</em> <code>BUD Net Sales Simulation</code>. This should take the net sales in local currency calculated in the previous procedure and convert back to GBP using the exchange rates including the effect of any forecast fluctuations. Use <em>yearly cumulated value time function</em> on the <code>BUD Currency Fluctuation</code> block to ensure fluctuations cumulate month by month. Consider whether the <em>calculation domain</em> should be extended for new tuples on any of the dimensions.</p>,
                    hintJsx: <p>Data flow expression should be <code>BUD Net Sales simulation = BUD Net Sales Local Curr / (BUD Exchange Rates + BUD Currency Fluctuations)</code>. The calculation domain must be extended on all members of the <code>Scenario</code> entity, as this dimension is not present in any of the source cubes.</p>
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
                    instructionJsx: <p>To compare the scenarios, edit the layout of the bottom data view, setting a <em>layout select</em> to select all Scenarios (this will effectively override the pager for that layout) and adding Scenario to the column axes</p>
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
                            <p>In the procedure <em>options</em>, add a <em>temporary cube</em> called <code>Product Profile</code> with the following settings:</p>
                            <ul>
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
                    instructionJsx: <p>Add a <em>data flow</em> action to <em>copy</em> data for the selected Product from <code>BUD Sales Volume</code> to the <code>Product Profile</code> <em>temporary cube</em></p>
                },
                {
                    instructionJsx: <p>Add an action to <em>restore</em> the Destination Product selection</p>
                },
                {
                    instructionJsx: <p>Add an action to copy data back from <code>Product Profile</code> to <code>BUD Sales Volume</code>. Note that the change in selection has effectively copied data from one slice of BUD Sales Volume to another.</p>
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
                                <li>Insert the current date and time in the cube <code>BUD Workflow Timestamp</code></li>
                            </ul>
                            <p>Consider the <em>calculation domain</em> required for these data flows</p>
                        </div>,
                    hintJsx: <p>These data flows only require the target cube in the layout and the expressions are hard-coded. Ensure text is enclosed in double-quotes.For the current date and time, a substitution formula is required. The calculation domain for each of these data flows must be extended on all members of all of the dimensions of the target cubes.</p>
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
                    instructionJsx: <p>Open screen <code>Forecast Snapshot</code>. Set the <em>entity editor</em> object to the <code>Forecast Snapshot</code> entity. In <em>ATO entities configuration</em>, allow <em>insert/edit member</em> with the <em>auto-incremental</em> setting. This means a user can create a new entity member by just entering the description and the code will automatically be assigned the next available value in a numerical sequence.</p>
                },
                {
                    instructionJsx:
                        <div>
                            <p>Configure the <em>data view</em> with the following blocks:</p>
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
                    instructionJsx: <p>Run the procedure again for <code>FY Budget 2021</code>. Note that nothing is copied to FCT Net Sales this time. This is because of the select based on cube action for the actual months causing an <em>empty selection</em>.</p>
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
};