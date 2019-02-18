# Udacity-P6
Prosper Loans data Visualization
## Summary:
For final Udacity project I picked "Loan Data from Prosper" Dataset, which contains information 
about 113,937 loans issued through Prosper - the popular peer-to-peer lending platform. 
I did initial explarotary data analysis in ipython notebook establishing relatively strong correlation between return on investment
(Lenders Yield) and Loan reciepient credit scores, although relationship between thse variables are not as straigh forward:
Interest sate is higher for Low credit score borrowers, but they are more likely to default on their loan obligations,
at the same time  high quality borrowers with high credit scores get much loans with much lower Interest rate.
Overall average Loan Yields for investors tend to increase until Borrowers credit score reaches 600 and than drops
flatening out below 10% for Borrowers with Credit score 800 and above.
Goal of the project is to create explanatory visualisation of Investor returns over period from
2009 to 2014 and demonstrate trends and interdepencies in Number of loan issued, average loan recipient
credit score across the United States.

## Design

I looked into http://dimplejs.org/ library to put together my visualization, Advanced Examples section using 2 primary examples
"Interactive Legend" (http://dimplejs.org/advanced_examples_viewer.html?id=advanced_interactive_legends) and 
"Storyboard Control" (http://dimplejs.org/advanced_examples_viewer.html?id=advanced_storyboard_control) as a visualization framework.
Initialy I have displayed generic trend between yeild and borrowers credit scores for each state by year. As I have worked on 
Visualisation I have added quarterly segmentation of data, chronological order to the animation. Further more I have added Axis "z" (Bubble Size)
to the Main Chart to better represent weight of each tate and organised States in legend by overall Number of loans issued.


## Feedback
I have received feedback from multiple coworkers, my wife and also posted chart link on my facebook page.

### David (Coworker)
Indicator section (on the left of the chart) is too busy remove lines and annotation. Axis x does not reflect actual amout of loans issued
try to make it clear how many loans were issued for eacj Quarter.

**I have customized Tooltip text on Indicator bars and removed axis x and ticks**

### Katia (Spouse)
Misspellings on chart explanations. Add term 'average' to the chart bubble (in the credit score). 
Add more precise Yield persentage. Make the pause/resume animation bar with more vivid colors 
Add more detailed description to the graph.

**Updated tick colors on Indicator chart, improoved description, updated text on tool tip of main chart**

### Facebook Post Comments:
Where the data coming from?
**Added Data Source References**

Old data, do you have more recent info

**No recent Prosper data available**












##Resources
###Dimple JS Libraries:
http://dimplejs.org/advanced_examples_viewer.html?id=advanced_storyboard_control
http://dimplejs.org/advanced_examples_viewer.html?id=advanced_interactive_legends
https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#addSeries
https://stackoverflow.com/questions/36641788/remove-tick-marks-in-d3-dimple
https://www.analyticsvidhya.com/blog/2017/08/visualizations-with-d3-js/


###Tool tip customization
http://annapawlicka.com/pretty-charts-with-dimple-js/
http://dimplejs.org/adhoc_viewer.html?id=adhoc_bar_custom_tooltips
