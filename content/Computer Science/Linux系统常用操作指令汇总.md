Unix/Linux 命令行遵循 "**命令 + 选项 + 参数**" 的通用语法，所有操作都通过文本指令完成。掌握这些核心命令是高效使用 Unix 系统的基础。

## 一、基础操作与帮助

### 1. 命令行基础

- `clear`：清空终端屏幕
- `exit`：退出当前终端会话
- `logout`：注销当前用户
- `history`：查看命令历史记录
    
    - `!{n}`：执行第`n`条历史命令
    - `!!`：执行上一条命令
    - `!{string}`：执行最近一条以`string`开头的命令
    

### 2. 帮助命令

- `man {command}`：查看命令的详细手册页（最权威）
    
    - `man -k {keyword}`：搜索包含关键字的手册页
    
- `{command} --help`：查看命令的简要帮助信息
- `info {command}`：查看 GNU 风格的帮助文档

## 二、文件与目录操作

### 1. 目录导航

- `pwd`：显示当前工作目录的绝对路径
- `cd {path}`：切换到指定目录
    
    - `cd`：切换到当前用户的主目录
    - `cd ~`：切换到当前用户的主目录
    - `cd ..`：切换到上一级目录
    - `cd -`：切换到上一次所在的目录
    - `cd /`：切换到根目录
    

### 2. 列出目录内容

- `ls`：列出当前目录的文件和子目录
    
    - `ls -l`：以长格式显示详细信息（权限、所有者、大小、修改时间）
    - `ls -a`：显示所有文件，包括隐藏文件（以`.`开头）
    - `ls -h`：以人类可读的格式显示文件大小（KB、MB、GB）
    - `ls -t`：按修改时间排序（最新的在前）
    - `ls -r`：反向排序
    - `ls -R`：递归列出所有子目录的内容
    - `ls -la`：常用组合，显示所有文件的详细信息
    

### 3. 创建与删除

- `mkdir {dir}`：创建一个新目录
    
    - `mkdir -p {dir1/dir2/dir3}`：递归创建多级目录
    
- `rmdir {dir}`：删除空目录
- `rm {file}`：删除文件
    
    - `rm -r {dir}`：递归删除目录及其所有内容
    - `rm -f {file}`：强制删除文件，不提示确认
    - `rm -rf {dir}`：强制递归删除目录（**危险操作**）
    
- `touch {file}`：创建一个空文件，或更新已有文件的时间戳

### 4. 复制与移动

- `cp {source} {destination}`：复制文件
    
    - `cp -r {source_dir} {dest_dir}`：递归复制目录及其内容
    - `cp -i {source} {dest}`：覆盖前提示确认
    
- `mv {source} {destination}`：移动文件或重命名文件
    
    - `mv -i {source} {dest}`：覆盖前提示确认
    

### 5. 链接操作

- `ln {target} {linkname}`：创建硬链接
- `ln -s {target} {linkname}`：创建符号链接（软链接）

## 三、文件查看与编辑

### 1. 查看文件内容

- `cat {file}`：显示文件的全部内容
    
    - `cat -n {file}`：显示行号
    
- `more {file}`：分页显示文件内容（只能向下翻页）
- `less {file}`：分页显示文件内容（可上下翻页，功能更强大）
    
    - 操作：`空格`向下翻页，`b`向上翻页，`q`退出，`/`搜索
    
- `head {file}`：显示文件的前 10 行
    
    - `head -n {num} {file}`：显示前`num`行
    
- `tail {file}`：显示文件的最后 10 行
    
    - `tail -n {num} {file}`：显示最后`num`行
    - `tail -f {file}`：实时显示文件新增的内容（常用于查看日志）
    

### 2. 文本编辑

- `nano {file}`：简单易用的终端文本编辑器
- `vim {file}`：功能强大的终端文本编辑器（参考之前的 Vim 速查表）
- `emacs {file}`：另一个功能强大的文本编辑器

## 四、文件权限与所有权

Unix 系统中每个文件都有 3 种权限（读 r、写 w、执行 x），分别对应 3 种用户（所有者 u、组 g、其他 o）。

### 1. 修改权限

- `chmod {mode} {file}`：修改文件或目录的权限
    
    - 数字表示法：`r=4`，`w=2`，`x=1`
        
        - `chmod 755 {file}`：所有者读写执行，组和其他读执行
        - `chmod 644 {file}`：所有者读写，组和其他只读
        
    - 符号表示法：
        
        - `chmod u+x {file}`：给所有者添加执行权限
        - `chmod g-w {file}`：移除组的写权限
        - `chmod o=r {file}`：设置其他用户只有读权限
        - `chmod a+r {file}`：给所有用户添加读权限
        
    

### 2. 修改所有者和组

- `chown {user}:{group} {file}`：修改文件的所有者和组
    
    - `chown {user} {file}`：只修改所有者
    - `chown -R {user}:{group} {dir}`：递归修改目录及其内容的所有者和组
    
- `chgrp {group} {file}`：修改文件的所属组

### 3. 特殊权限

- `chmod u+s {file}`：设置 SUID 权限（执行文件时以文件所有者身份运行）
- `chmod g+s {file}`：设置 SGID 权限（执行文件时以文件所属组身份运行）
- `chmod +t {dir}`：设置粘滞位（只有文件所有者才能删除目录中的文件）

## 五、进程管理

### 1. 查看进程

- `ps`：显示当前终端的进程
    
    - `ps aux`：显示系统中所有进程的详细信息
    - `ps -ef`：另一种显示所有进程的格式
    
- `top`：实时显示系统进程和资源使用情况
    
    - 操作：`q`退出，`k`杀死进程，`M`按内存排序，`P`按 CPU 排序
    
- `htop`：增强版的 top（需要安装）
- `pstree`：以树状结构显示进程关系

### 2. 控制进程

- `kill {pid}`：向进程发送终止信号（默认 15 号信号）
    
    - `kill -9 {pid}`：强制杀死进程（9 号信号，不可忽略）
    - `kill -l`：列出所有可用的信号
    
- `pkill {name}`：根据进程名杀死进程
- `killall {name}`：杀死所有同名进程
- `bg`：将挂起的进程放到后台运行
- `fg`：将后台进程放到前台运行
- `jobs`：列出当前终端的后台任务

## 六、系统信息与管理

### 1. 系统基本信息

- `uname`：显示系统内核信息
    
    - `uname -a`：显示所有系统信息
    
- `hostname`：显示或设置主机名
- `who`：显示当前登录的用户
- `w`：显示当前登录用户及其正在执行的命令
- `uptime`：显示系统运行时间和平均负载
- `date`：显示或设置系统日期和时间
- `cal`：显示日历

### 2. 资源使用情况

- `free`：显示内存和交换空间使用情况
    
    - `free -h`：以人类可读的格式显示
    
- `df`：显示磁盘分区使用情况
    
    - `df -h`：以人类可读的格式显示
    
- `du`：显示目录或文件的磁盘使用情况
    
    - `du -h {dir}`：以人类可读的格式显示目录大小
    - `du -sh {dir}`：只显示目录的总大小
    

### 3. 系统关机与重启

- `shutdown -h now`：立即关机
- `shutdown -r now`：立即重启
- `shutdown -h +10`：10 分钟后关机
- `shutdown -c`：取消计划中的关机
- `halt`：关机
- `reboot`：重启
- `poweroff`：关机

## 七、网络操作

### 1. 网络连接测试

- `ping {host}`：测试与目标主机的连通性
    
    - `ping -c {num} {host}`：发送`num`个数据包后停止
    
- `traceroute {host}`：显示数据包到目标主机的路径
- `mtr {host}`：结合 ping 和 traceroute 的网络诊断工具

### 2. 网络接口信息

- `ifconfig`：显示或配置网络接口（传统命令）
- `ip addr`：显示网络接口信息（现代命令）
- `ip link`：显示网络接口状态
- `ip route`：显示路由表

### 3. 网络连接查看

- `netstat`：显示网络连接、路由表、接口统计等（传统命令）
    
    - `netstat -tuln`：显示所有监听的 TCP 和 UDP 端口
    
- `ss`：显示网络连接（现代命令，比 netstat 更快）
    
    - `ss -tuln`：显示所有监听的 TCP 和 UDP 端口
    

### 4. 远程连接与文件传输

- `ssh {user}@{host}`：通过 SSH 远程登录到主机
    
    - `ssh -p {port} {user}@{host}`：指定端口号
    
- `scp {source} {user}@{host}:{dest}`：通过 SSH 复制文件
    
    - `scp -r {source_dir} {user}@{host}:{dest}`：递归复制目录
    
- `sftp {user}@{host}`：通过 SSH 进行安全的文件传输

### 5. 文件下载

- `wget {url}`：从网络下载文件
    
    - `wget -c {url}`：断点续传下载
    
- `curl {url}`：从网络获取或发送数据
    
    - `curl -O {url}`：下载文件并保存为原名
    

## 八、压缩与解压

### 1. tar 命令（最常用）

tar 命令用于打包和解包文件，可结合不同的压缩算法使用。

- `tar -cvf {archive.tar} {files}`：创建 tar 包（不压缩）
- `tar -xvf {archive.tar}`：解压 tar 包
- `tar -zcvf {archive.tar.gz} {files}`：创建 gzip 压缩的 tar 包
- `tar -zxvf {archive.tar.gz}`：解压 gzip 压缩的 tar 包
- `tar -jcvf {archive.tar.bz2} {files}`：创建 bzip2 压缩的 tar 包
- `tar -jxvf {archive.tar.bz2}`：解压 bzip2 压缩的 tar 包
- `tar -Jcvf {archive.tar.xz} {files}`：创建 xz 压缩的 tar 包
- `tar -Jxvf {archive.tar.xz}`：解压 xz 压缩的 tar 包
- `tar -tvf {archive}`：查看 tar 包的内容

### 2. 其他压缩命令

- `gzip {file}`：压缩文件为.gz 格式
- `gunzip {file.gz}`：解压.gz 文件
- `bzip2 {file}`：压缩文件为.bz2 格式
- `bunzip2 {file.bz2}`：解压.bz2 文件
- `xz {file}`：压缩文件为.xz 格式
- `unxz {file.xz}`：解压.xz 文件
- `zip {archive.zip} {files}`：创建 zip 压缩包
- `unzip {archive.zip}`：解压 zip 压缩包

## 九、用户与组管理

### 1. 用户管理

- `useradd {username}`：创建新用户
    
    - `useradd -m {username}`：创建用户并自动创建主目录
    - `useradd -s /bin/bash {username}`：指定默认 shell 为 bash
    
- `userdel {username}`：删除用户
    
    - `userdel -r {username}`：删除用户及其主目录
    
- `usermod {options} {username}`：修改用户属性
    
    - `usermod -aG {group} {username}`：将用户添加到组
    - `usermod -s /bin/bash {username}`：修改用户的默认 shell
    
- `passwd {username}`：修改用户密码
- `su {username}`：切换到指定用户
    
    - `su - {username}`：切换到指定用户并加载其环境变量
    
- `sudo {command}`：以 root 权限执行命令

### 2. 组管理

- `groupadd {groupname}`：创建新组
- `groupdel {groupname}`：删除组
- `groupmod {options} {groupname}`：修改组属性
- `groups {username}`：显示用户所属的组

## 十、搜索与查找

### 1. 文件查找

- `find {path} {options}`：在指定路径下查找文件
    
    - `find {path} -name {filename}`：按文件名查找
    - `find {path} -type f`：只查找普通文件
    - `find {path} -type d`：只查找目录
    - `find {path} -size +10M`：查找大于 10MB 的文件
    - `find {path} -mtime -7`：查找 7 天内修改过的文件
    - `find {path} -exec {command} {} \;`：对找到的文件执行命令
    
- `locate {filename}`：快速查找文件（基于数据库，需要定期更新）
    
    - `updatedb`：更新 locate 数据库
    

### 2. 文本搜索

- `grep {pattern} {file}`：在文件中搜索匹配的行
    
    - `grep -i {pattern} {file}`：忽略大小写
    - `grep -v {pattern} {file}`：显示不匹配的行
    - `grep -n {pattern} {file}`：显示行号
    - `grep -r {pattern} {dir}`：递归搜索目录中的所有文件
    - `grep -E {pattern} {file}`：使用扩展正则表达式
    

## 十一、高级技巧

### 1. 管道与重定向

- 管道`|`：将一个命令的输出作为另一个命令的输入
    
    - 示例：`ls -l | grep .txt`：列出所有.txt 文件
    
- 输出重定向
    
    - `> {file}`：将输出覆盖写入文件
    - `>> {file}`：将输出追加到文件
    - `2> {file}`：将错误输出覆盖写入文件
    - `2>> {file}`：将错误输出追加到文件
    - `&> {file}`：将标准输出和错误输出都写入文件
    
- 输入重定向
    
    - `< {file}`：从文件读取输入
    

### 2. 命令替换

- `` `{command}` ``：将命令的输出作为参数
- `$({command})`：更推荐的命令替换方式
    
    - 示例：`echo "当前目录是 $(pwd)"`
    

### 3. 别名

- `alias {name}='{command}'`：创建命令别名
    
    - 示例：`alias ll='ls -la'`
    
- `unalias {name}`：删除别名
- 永久别名需要添加到`~/.bashrc`或`~/.bash_aliases`文件中

### 4. 环境变量

- `echo ${VAR}`：显示环境变量的值
- `export VAR=value`：设置环境变量
- `env`：显示所有环境变量
- `unset VAR`：删除环境变量

## 十二、新手必记救命指令

1. `Ctrl+C`：终止当前正在运行的命令
2. `Ctrl+Z`：挂起当前命令（可通过`fg`恢复）
3. `Ctrl+D`：退出当前 shell（相当于`exit`）
4. `Tab`：自动补全命令和文件名
5. `man {command}`：查看任何命令的帮助文档