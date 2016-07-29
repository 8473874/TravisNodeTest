var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  console.log("index");
  let nowTime = new Date();
  await ctx.render('index', {
    nowTime: nowTime
  });
});

module.exports = router;