import os.path 
import csv
import xml.etree.ElementTree as ET

#Row Format:
# RETURN_ID,FILING_TYPE,EIN,TAX_PERIOD,SUB_DATE,TAXPAYER_NAME,RETURN_TYPE,DLN,OBJECT_ID
# RETURN_ID : ?
# FILING_TYPE : method of filing, usually EFILE
# EIN : Employer Identification Number - Company ID
# TAX_PERIOD : the month that the filed the taxes? YYYYMM
# SUB_DATE : year of submission, usually 2023 
# TAXPAYER_NAME : duh 
# RETURN_TYPE : The Type of return filed. : {990, 990T, 990EZ, 990PF}
# DLN : Document Locator Number... IDK 
# OBJECT_ID : Prefix to the company's XML document
class IndexItem:
    """
    Class for representing each row in index_2023.csv
    """
    def __init__(self, row):
        self.RETURN_ID, self.FILING_TYPE, self.EIN, self.TAX_PERIOD, self.SUB_DATE, self.TAXPAYER_NAME, self.RETURN_TYPE, self.DLN, self.OBJECT_ID = row
        """
        Constructs a new row IndexItem object 

        :param row: iterable of strings with length 9, represents all of this class's fields. 
        """

    def __str__(self):
        return f"Object for {self.TAXPAYER_NAME}"

def readXML(obj: IndexItem):
    #print(obj)
    # every XML FILE will be unique
    try:
        tree = ET.parse(f"{os.path.dirname(__file__)}/../XML/2023_TEOS_XML_03A/{obj.OBJECT_ID}_public.xml")
        print(obj.TAXPAYER_NAME)
        root = tree.getroot()
        # print(root.attrib)
        header = root[0]
        filer = header[4]
        print(filer.attrib)
        for child in filer:
            # print(child)
            pass
        # for child in header:
            # print(child.tag)
    except FileNotFoundError:
        pass

filing_types = set([])
with open(os.path.dirname(__file__) + "/../index_2023.csv", "r") as file:
    reader = csv.reader(file, delimiter=",")
    indexed = enumerate(reader)
    for index, row in indexed:
        if index == 0:
            continue
        # elif index > 60:
        #     break
        row_obj = IndexItem(row)
        filing_types.add(row_obj.RETURN_TYPE)
        # readXML(row_obj)

print(filing_types)
