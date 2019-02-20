//format = d3.time.format("%m-%Y");
  //d3.csv("./data/clean_prosper_data_3.csv", function(d) {
          //d['Credit Score'] = +d['Credit Score'];
          //d['Number of Loans'] = +d['Number of Loans']; 
          //d['Prosper Score  '] = +d['Prosper Score '];
          //d['Lenders Yield'] = +d['Lenders Yield'];
          //return d;
        //}, draw);
 /*
    Use D3 to load the CSV file
    and pass the contents of it to the draw function
 */       
  d3.csv("data/clean_prosper_data_3.csv", draw);
