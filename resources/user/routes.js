
const middlware = require('./middleware');


let router = express.Router()

router.get('/', middlware.CheckAuth, middlware.ForgotV2, middlware.SendEmail );
router.put('/', middlware.CheckAuth, middlware.ForgotV2, middlware.SendEmail );
router.delete('/', middlware.CheckAuth, middlware.ForgotV2, middlware.SendEmail );
router.post('/', middlware.CheckAuth, middlware.ForgotV2, middlware.SendEmail );



module.exports = router
