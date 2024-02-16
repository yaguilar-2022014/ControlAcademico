import { initServer } from "./configs/app.js"
import {connect} from "./configs/mongo.js"
import { test } from "./src/user/user.controller.js"

initServer()
connect()
test()