/**
 *
 * @summary 插件第一次加载时的默认设置
 * */
window.defaultSettings = {
    normalSettings: {
        maxWinMoney: null,
        maxLoseMoney: null,
        accountBalance: 0
    },
    autoShutDownSettings: {
        autoShutdownPC: 'maxWinMoney'
    },
    runtimeVariable: {
        originalAccountBalance: 0,//账户初始余额
        nextPeriodInvestTime: null,//下期的投注时间
        currentAccountBalance: null//当前账户余额
    }
};