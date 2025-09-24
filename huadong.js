// --- iOS 自动化脚本示例 (使用新 API) ---
// 麦当劳

// --- 配置 ---
DEFAULT_FIND_TIMEOUT_S = 5.0; // 默认查找元素的超时时间 (秒)
const WAIT_AFTER_TAP_MS = 3000;
const WAIT_GENERIC_MS = 1500;
const SWIPE_INTERVAL_S = 1.0;     // 滑动查找的间隔时间 (秒) - 改为秒
const FIND_ELEMENT_TIMEOUT_S = 1; // 每次查找元素的超时时间 (秒)

// --- 全局状态变量 ---
var g_swipeFindTimerId = null;     // 存储 iOS.startInterval 返回的 ID
var g_swipeFindCount = 0;          // 当前滑动次数
var g_swipeFindText = "";          // 要查找的文本
var g_swipeFindMaxCount = 10;      // 最大滑动次数
var g_swipeFindOk = false;         // 标记是否找到
var g_swipeStartX = 0;             // 滑动起始 X
var g_swipeStartY = 0;             // 滑动起始 Y
var g_swipeEndX = 0;               // 滑动结束 X
var g_swipeEndY = 0;               // 滑动结束 Y
var g_isSwipeFindRunning = false;  // 标记查找函数是否正在运行，防止重入

// --- 辅助函数 (新) ---



// --- 启动滑动查找的函数 ---
function findProdTap() {
    iOS.log(`findProdTap`);

    

    // --- 计算滑动坐标 ---
    var screenWidth = iOS.getScreenWidth();
    var screenHeight = iOS.getScreenHeight();
    g_swipeStartX = screenWidth / 2;
    g_swipeStartY = screenHeight / 10 * 8;
    g_swipeEndX = screenWidth / 2;
    g_swipeEndY = screenHeight / 10 * 7; // Y 减小，是向上滑动

    // --- 执行第一次查找 ---
    

    // --- 第一次未找到，执行首次滑动并准备启动计时器 ---
    iOS.log(`findProdTap: 第一次未找到，执行首次滑动...`);
    iOS.swipe(g_swipeStartX, g_swipeStartY, g_swipeEndX, g_swipeEndY, 0.2);
    g_swipeFindCount = 1; // 记录已经滑动的次数

    // --- 启动计时器，使用全局回调函数名 ---
    // 注意：这里传递的是字符串 "swipeFindCallback"
   // iOS.log(`findProdTap: 启动计时器，每隔 ${SWIPE_INTERVAL_S} 秒调用 'swipeFindCallback' 函数...`);
    

    // 这个函数会立即返回，查找和滑动将在后台通过计时器进行。
}

// --- 主逻辑 ---
function runAutomation() {
    

    findProdTap();

    // --- 等待 findProdTap 完成 ---
    // 使用轮询检查 g_swipeFindTimerId 是否变为 null 来等待
    
    

    
    iOS.log("调用 iOS.scriptDidComplete() 通知原生脚本结束。");
    iOS.scriptDidComplete();
}

// --- 脚本入口 ---
runAutomation();