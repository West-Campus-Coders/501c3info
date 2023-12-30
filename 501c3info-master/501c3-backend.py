from bs4 import BeautifulSoup
import os
import sqlite3
import lxml


us_state_to_abbrev = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY",
    "District of Columbia": "DC",
    "American Samoa": "AS",
    "Guam": "GU",
    "Northern Mariana Islands": "MP",
    "Puerto Rico": "PR",
    "United States Minor Outlying Islands": "UM",
    "U.S. Virgin Islands": "VI",
}

abbrev_to_us_state = dict(map(reversed, us_state_to_abbrev.items()))

#FUNCTION: Using pandas delete all rows except EIN, Company Name, and form type
#data = pd.read_csv('index_2023.csv')
#data.drop('RETURN_ID', inplace=True, axis=1)
#data.drop('FILING_TYPE', inplace=True, axis=1)
#data.drop('TAX_PERIOD', inplace=True, axis=1)
#data.drop('SUB_DATE', inplace=True, axis=1)
#data.drop('DLN', inplace=True, axis=1)
#data.drop('OBJECT_ID', inplace=True, axis=1)
#data_list = data.to_dict('records')

#sqlITE FUNCTIONS
con = sqlite3.connect("Organizations.db")
cur = con.cursor()
print("Successfully Connected to SQLite")
cur.execute("CREATE TABLE IF NOT EXISTS Organizations(ein, name, return_type, city, state, trev, tgiven, tasset)")
con.close()


def insertVariableIntoTable(ein, name, return_type, city, state, trev, tgiven, tasset):
    try:
        sqliteConnection = sqlite3.connect("Organizations.db")
        cursor = sqliteConnection.cursor()
        print("Connected to SQLite")
        sqlite_insert_with_param = """INSERT INTO Organizations(ein, name, return_type, city, state, trev, tgiven, tasset) VALUES(?,?,?,?,?,?,?,?)"""
        data_tuple = (ein, name, return_type, city, state, trev, tgiven, tasset)
        cursor.execute(sqlite_insert_with_param, data_tuple)
        sqliteConnection.commit()
        print("Added entry to Organizations Table")
    except sqlite3.Error as error:
        print("Failed to insert Python variable into sqlite table", error)



#
def xml990ez(soup):
    ein = soup.EIN.string
    name = soup.Filer.BusinessName.BusinessNameLine1Txt.string
    return_type = soup.ReturnTypeCd.string
    city = soup.Filer.USAddress.CityNm.string
    state = abbrev_to_us_state[soup.Filer.USAddress.StateAbbreviationCd.string]
    trev = soup.ReturnData.IRS990EZ.GrossReceiptsAmt.string
    tGiven = 0
    tass = soup.ReturnData.IRS990EZ.NetAssetsOrFundBalancesEOYAmt.string
    insertVariableIntoTable(ein, name, return_type, city, state, trev, tGiven, tass)


def xml990(soup):
    ein = soup.EIN.string
    name = soup.Filer.BusinessName.BusinessNameLine1Txt.string
    return_type = soup.ReturnTypeCd.string
    city = soup.Filer.USAddress.CityNm.string
    state = abbrev_to_us_state[soup.Filer.USAddress.StateAbbreviationCd.string]
    trev = soup.ReturnData.IRS990.GrossReceiptsAmt.string
    tGiven = 0
    tass = soup.ReturnData.IRS.string
    insertVariableIntoTable(ein, name, return_type, city, state, trev, tGiven, tass)

def xml990pf(soup):
    ein = soup.EIN.string
    name = soup.Filer.BusinessName.BusinessNameLine1Txt.string
    return_type = soup.ReturnTypeCd.string
    city = soup.Filer.USAddress.CityNm.string
    state = abbrev_to_us_state[soup.Filer.USAddress.StateAbbreviationCd.string]
    trev = 0
    tGiven = soup.ReturnData.IRS990PF.ContriPaidRevAndExpnssAmt.string
    tass = soup.ReturnData.IRS990PF.FMVAssetsEOYAmt.string
    insertVariableIntoTable(ein, name, return_type, city, state, trev, tGiven, tass)




    
path = r"C:\Users\goshe\Documents\501c3-info\501c3info-master\XML\2023_TEOS_XML_03A"
for (dirpath, dirnames, filenames) in os.walk(path):
    for filename in filenames:
        soup = BeautifulSoup(open(os.path.join(dirpath, filename), "r"), "xml")
        try:    
            return_type = soup.ReturnTypeCd.string
            if return_type == "990EZ":
                xml990ez(soup)
                print("EZ DETECTED")
            elif return_type == "990":
                xml990(soup)
                print("990 DETECTED")
            elif return_type == "990PF":
                xml990pf(soup)
                print("PF DETECTED")
            else:
                print("skipped")
                continue 
        except AttributeError as Error:
            print("EIN detected as Nonetype moving on to next entry", Error)

