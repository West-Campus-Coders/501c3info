import pandas as pd
from bs4 import BeautifulSoup
import csv

#FUNCTION: Using pandas delete all rows except EIN, Company Name, and form type
data = pd.read_csv('index_2023.csv')
data.drop('RETURN_ID', inplace=True, axis=1)
data.drop('FILING_TYPE', inplace=True, axis=1)
data.drop('TAX_PERIOD', inplace=True, axis=1)
data.drop('SUB_DATE', inplace=True, axis=1)
data.drop('DLN', inplace=True, axis=1)
data.drop('OBJECT_ID', inplace=True, axis=1)
data_list = data.to_dict('records')
#FUNCTION: Using pandas access newly cleaned csv file to build a list of dictionaries they will use the first column as their keys



#FUNCTION: Using Beautiful Soup go through every XML file if its anything but form 990, 990ez or 990pf skip. We will need 4 functions
# one for 990, one for 990ez, one for 990pf and one that will call the individual 3 functions depending on form type and builds a final data str