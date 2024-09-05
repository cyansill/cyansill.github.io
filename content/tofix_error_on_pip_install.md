Title: 解决因代理出现的pip下载失败问题
Date: 2024-09-05 19:34
Modified: 2024-09-05 19:34
Category: ErrorDetection
Tags: pip, proxy, error_detection
Slug: tofix_error_on_pip_install
Authors: cyansill
Summary: 解决因代理出现的pip下载失败问题

## 问题的出现

在使用pip安装python包时，出现以下错误：

```powershell
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/pelican/
WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/pelican/
WARNING: Retrying (Retry(total=2, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/pelican/
WARNING: Retrying (Retry(total=1, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/pelican/
WARNING: Retrying (Retry(total=0, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/pelican/
ERROR: Could not find a version that satisfies the requirement pelican (from versions: none)
ERROR: No matching distribution found for pelican
WARNING: There was an error checking the latest version of pip.
```

## 解决

该问题一般系代理导致，有两种解决办法。 
1、关闭代理。 
2、配置pip使用代理。 

第一种方法不必赘述。第二种方法如下： 
对于 linux 环境
```
export http_proxy=http://proxyAddress:proxyPort
export https_proxy=http://proxyAddress:proxyPort
```
对于 windows 下CMD环境
```
set http_proxy=http://proxyAddress:proxyPort
set https_proxy=http://proxyAddress:proxyPort
```
对于 windows 下PowerShell环境
```
$env:http_proxy="http://proxyAddress:proxyPort"
$env:https_proxy="http://proxyAddress:proxyPort"
```
完成后再次执行 `pip install` 即可。