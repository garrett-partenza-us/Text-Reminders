from firebase import Firebase
from datetime import datetime
from twilio.rest import Client

config = {
    "apiKey": "AIzaSyDIrO_5RdCui4i29SO89txMtcDaSTqbRYc",
    "authDomain": "text-based-reminders-project.firebaseapp.com",
    "databaseURL": "https://text-based-reminders-project.firebaseio.com",
    "storageBucket": "text-based-reminders-project.appspot.com"
}
firebase = Firebase(config)
db = firebase.database()

account_sid = 'ACc1759796eabf05f71de0cd6bb0d0e49b'
auth_token = '4252ba3b5001c3f88b2d01080e12d4fb'

def remind(number, message):
    client = Client(account_sid, auth_token)

    message = client.messages \
                    .create(
                         body=message,
                         from_='+13343730396',
                         to=number
                     )

def get_now():

    now = str(datetime.now())
    day = now.split()[0]
    time = now.split()[1].split(":")
    date = now.split()[0]
    hour = time[0]
    minute = time[1]
    second = time[2]
    time = str((int(time[0])-4)%24)+":"+str(time[1])
    return([date,time])

def lambda_handler(event, context):
    tasks = db.child("/").get()
    for task in tasks.each():
        print(task.val()['Date'].split("T"))
        print(get_now())

        if task.val()['Date'].split("T")==get_now():
            remind(task.val()['Num'], task.val()['Mess'])

lambda_handler(0,0)
