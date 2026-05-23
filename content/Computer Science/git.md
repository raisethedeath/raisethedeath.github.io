> 如果是一个没有任何.git文件夹的新项目
>
> 删除配置方法：
> `rm -rf .git`:原来已经摧毁的git仓库进行清理
> - `git init`:初始化git仓库
> - `git config --global user.name "XXXX"`
> - `git config --global user.email "XXXX"`:进行初始设置
> - `git config --global init.defaultBranch main`设置之后所有的仓库的主分支都是main
> - `git branch`进行分支验证
> - `git status`:验证更改情况，对提交的内容进行选择
> - `git add .`添加所有，灵活控制
> - `git commit -m 'XXXX'`:设置提交的名称
> - `git push`

