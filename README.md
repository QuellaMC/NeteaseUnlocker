# 网易云音乐解锁脚本 (NeteaseUnlocker)

本仓库提供了一系列脚本和配置，专为 [Loon](https://www.google.com/search?q=Loon%20app), [Surge](https://www.google.com/search?q=Surge%20app), [Quantumult X](https://www.google.com/search?q=Quantumult%20X%20app) 和 [Stash](https://www.google.com/search?q=Stash%20app) 等代理工具设计，旨在解锁网易云音乐的灰色歌曲和海外地区播放限制。

## ✨ 主要功能

* **解锁变灰歌曲**: 通过修改 API 响应，让因版权问题而无法播放的歌曲恢复正常。
* **解除地区限制**: 伪装 IP 地址，让你在海外也能无障碍收听所有歌曲。
* **屏蔽广告与更新**: 屏蔽部分广告和烦人的版本升级提示，提供更纯净的听歌体验。
* **兼容加密 API**: 支持网易云音乐最新的 EAPI 加密接口，确保解锁功能长期有效。

## 🚀 安装与配置

在进行任何操作前，请确保你已在所使用的代理工具中开启 **MitM**，并 **信任了 CA 证书**。

### **1. Quantumult X**

**[一键导入 Quantumult X](quantumult-x:///add-resource?remote-resource=%7B%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FQuellaMC%2FNeteaseUnlocker%2Fmain%2FNeteaseUnlocker.snippet%22%5D%7D)**

**手动配置:**

1.  **添加重写规则**: 在 `重写 > 引用` 添加以下链接。
    ```
    https://raw.githubusercontent.com/QuellaMC/NeteaseUnlocker/main/NeteaseUnlocker.snippet
    ```

### **2. Loon**

**[一键导入 Loon](loon://import?plugin=https%3A%2F%2Fraw.githubusercontent.com%2FQuellaMC%2FNeteaseUnlocker%2Fmain%2FNeteaseUnlocker.plugin)**

**手动配置:**

1.  **添加插件**: 在 `配置 > 插件 > 插件` 添加以下链接。
    ```
    https://raw.githubusercontent.com/QuellaMC/NeteaseUnlocker/main/NeteaseUnlocker.plugin
    ```


### **3. Surge**

**[一键导入 Surge](surge:///install-module?url=https%3A%2F%2Fraw.githubusercontent.com%2FQuellaMC%2FNeteaseUnlocker%2Fmain%2FNeteaseUnlocker.sgmodule)**

**手动配置:**

1.  **添加模块**: 在 `首页 > 修改 > 模块 > 安装新模块` 添加以下链接。
    ```
    https://raw.githubusercontent.com/QuellaMC/NeteaseUnlocker/main/NeteaseUnlocker.sgmodule
    ```

### **4. Stash (Clash Premium Core)**

**[一键导入 Stash](stash://install-override?url=https%3A%2F%2Fraw.githubusercontent.com%2FQuellaMC%2FNeteaseUnlocker%2Fmain%2FNeteaseUnlocker.stoverride)**

**手动配置:**

1.  **添加覆写**: 在 `首页 > 覆写 > 安装覆写` 添加以下链接。
    ```
    https://raw.githubusercontent.com/QuellaMC/NeteaseUnlocker/main/NeteaseUnlocker.stoverride
    ```

## 🎵 使用方法

完成上述配置并启用相应的代理工具后，**完全退出并重新打开**网易云音乐 App。你会发现，之前灰色的歌曲已经可以正常播放了。

如果无效果请先切换至国内ip代理，等待灰色歌曲恢复后，再启用脚本并关闭国内代理即可。

作者自己并未拥有Loon进行测试，如果无效果请见谅。

## ⚠️ 免责声明

* 本项目仅供学习和技术交流使用，请勿用于任何商业用途。
* 对于使用本脚本可能带来的任何风险（如账号限制），项目作者概不负责。

## 🙏 致谢

* [**UnblockNeteaseMusic**](https://github.com/UnblockNeteaseMusic/server): 本项目的大部分核心逻辑均来源于此项目，感谢原作者的无私贡献。
