import pandas as pd
import numpy as np
import json

g1=pd.read_csv('displace.csv')
g2=g1.iloc[:,1:]
longi=[]
lati=[]
jsonvalue=[]
keys=[]
g1dict={}
#print(g1.columns)
df = pd.DataFrame()
df.fillna(365)
df['col'] = g1.columns

#print(df)
longi = g1["longitude"].tolist()
lati = g1["latitude"].tolist()

def smallvalues(lat,lon):
    small=0
    reqd=lati[0]
    for i in range(0,960):
        small=abs(lati[i]-lat)
        if small<reqd:
            reqd=small
            index=i
<<<<<<< HEAD
    return reqdvalues(index)
def reqdvalues(index):
   keys=g2.head(0)
   keys=keys.columns.tolist()
   jsonvalue=g2.loc[g2['Name']==g2.loc[index, 'Name']]
   json = jsonvalue.to_json(orient='split')
   return(json)   
      
print(smallvalues(7.009,32.0987))
=======
    reqdvalues(index)

def reqdvalues(index):
    keys=g2.head(0)
    keys=keys.columns.tolist()
    gg=g2.loc[g2['Name']==g2.loc[index, 'Name']]
    print(gg)
    #print(gg.head())
    '''jsonvalue=gg
    #jsonvalue=jsonvalue.values.tolist()
    for i in range(0,5):
       g1dict[keys[i]]= jsonvalue[0][i]
    jsondumps=json.dumps(g1dict)
    print(jsondumps)
    return(jsondumps)'''   
      
index = smallvalues(7.009,32.0987)
>>>>>>> c5180873d3102e53f62bb55f9ee6da076893deea


    
        
    
               

