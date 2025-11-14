// 获取DOM元素
const urlModal = document.getElementById('url-modal');
const urlInput = document.getElementById('url-input');
const closeModal = document.getElementsByClassName('close-modal')[0];
const closeButton = document.getElementById('close-button');
const copyToClipboardBtn = document.getElementById('copy-to-clipboard');
const copyUrlButtons = document.querySelectorAll('.copy-url-btn');

// 点击Copy URL按钮时显示弹窗
copyUrlButtons.forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        urlInput.value = url;
        urlModal.style.display = 'block';
    });
});

// 点击关闭按钮关闭弹窗
function closeModalWindow() {
    urlModal.style.display = 'none';
}

closeModal.addEventListener('click', closeModalWindow);
closeButton.addEventListener('click', closeModalWindow);

// 点击弹窗外部关闭弹窗
window.addEventListener('click', function(event) {
    if (event.target === urlModal) {
        closeModalWindow();
    }
});

// 实现复制到剪贴板功能
copyToClipboardBtn.addEventListener('click', function() {
    // 选择输入框中的文本
    urlInput.select();
    urlInput.setSelectionRange(0, 99999); // 兼容移动设备
    
    try {
        // 执行复制命令
        document.execCommand('copy');
        
        // 临时修改按钮文本表示复制成功
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        this.style.backgroundColor = '#ff69b4'; // 粉色表示成功
        
        // 2秒后恢复按钮原始状态
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '#ff69b4';
        }, 2000);
    } catch (err) {
        console.error('无法复制文本: ', err);
        // 显示错误信息
        this.textContent = 'Failed to copy!';
        this.style.backgroundColor = '#dc3545'; // 红色表示失败
        
        // 2秒后恢复按钮原始状态
        setTimeout(() => {
            this.textContent = 'Copy to Clipboard';
            this.style.backgroundColor = '#ff69b4';
        }, 2000);
    }
});

// ESC键关闭弹窗
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && urlModal.style.display === 'block') {
        closeModalWindow();
    }
});

// 自动选中URL输入框中的文本，当弹窗打开时
urlModal.addEventListener('DOMNodeInserted', function() {
    if (urlModal.style.display === 'block') {
        setTimeout(() => {
            urlInput.select();
        }, 100);
    }
});