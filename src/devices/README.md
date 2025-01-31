# equipment-manager(beta)
this is equipment-manager API (beta)

## How to use 
### install 
Requires nest cli to use this API
Check if you have nest cli installed.
```bash
$ nest --version 
```
If it's not installed,install it with the following command.
```bash
$ npm -i -g @nestjs/cli
```
To start the API, type the following command
```bash
$ npm run start
```

### request
POST (x-www-form-urlencoded) localhost:3000/devices :registar device info.
GET localhost:3000/devices :fetch devices info.
GET localhost:3000/devices/[id] :fetch device information specified by id.
PATCH localhost:3000/devices/[id] :Update status of device specified by id
DELETE localhost:3000/devices/[id] :Delete device specified by id.



