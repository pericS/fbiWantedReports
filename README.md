##  FBI Witness Reports
  

##  Running the app

After cloning GitHub repo run the following command:
```bash
$ docker-compose up -d
```
it will set our api up and running

## Send your report

You can send your report with POST request on /report endpoint, body requires two properties: 

    {
	    "suspectName",
	    "phoneNumber",
    }
for testing purposes you can use: 

    {
	    "suspectName": "Marisol Cortes",
	    "phoneNumber": "",#any valid phone number in format:+38162...
	}
