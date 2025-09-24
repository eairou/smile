// --- iOS 自动化脚本示例 (使用新 API) ---
// 麦当劳

// --- 配置 ---

// --- 全局状态变量 ---
//var g_swipeFindTimerId = null;     // 存储 iOS.startInterval 返回的 ID
var g_swipeFindCount = 0;          // 当前滑动次数
//var g_swipeFindText = "";          // 要查找的文本
//var g_swipeFindMaxCount = 10;      // 最大滑动次数
//var g_swipeFindOk = false;         // 标记是否找到
var g_swipeStartX = 0;             // 滑动起始 X
var g_swipeStartY = 0;             // 滑动起始 Y
var g_swipeEndX = 0;               // 滑动结束 X
var g_swipeEndY = 0;               // 滑动结束 Y
//var g_isSwipeFindRunning = false;  // 标记查找函数是否正在运行，防止重入


// --- 启动滑动查找的函数 ---
function findProdTap() {
    iOS.log(`findProdTap`);
    
    // --- 计算滑动坐标 ---
    var screenWidth = iOS.getScreenWidth();
    var screenHeight = iOS.getScreenHeight();
    g_swipeStartX = screenWidth / 2;
    g_swipeStartY = screenHeight / 10 * 6;
    g_swipeEndX = screenWidth / 2;
    g_swipeEndY = screenHeight / 10 * 3; // Y 减小，是向上滑动
    
    // --- 第一次未找到，执行首次滑动并准备启动计时器 ---
    iOS.log(`findProdTap: 第一次未找到，执行首次滑动...`);
    iOS.swipe(g_swipeStartX, g_swipeStartY, g_swipeEndX, g_swipeEndY, 3);
    g_swipeFindCount = 1; // 记录已经滑动的次数
    
}

// --- 主逻辑 ---
function runAutomation() {
    
    findProdTap();
    
    iOS.log("调用 iOS.scriptDidComplete() 通知原生脚本结束。");
    iOS.scriptDidComplete();
}

// --- 脚本入口 ---
runAutomation();