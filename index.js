const bot = require(__dirname + '/lib/peter')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Starting Mrsky-md ${VERSION}`)
  try {
    await bot.init()
    //bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
/**
MRSKYTECH WHATSAPPP BOT
**/
