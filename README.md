##目前仍未完成的问题：
####表单数据方面
```
1、所有表单中多选框中选项的互斥关系未实现
2、基本信息表单中根据身份证号自动识别出生日期和患者性别、根据身高体重自动计算BMI未实现
3、手术表单和内镜表单中“围术期抗菌药物使用情况”表单项之间的关系不明确
4、手术表单中“术后并发症与再手术情况”表单项之间的关系不明确
5、手术表单和内镜表单中“营养支持治疗情况”的评分标准未实现
6、所有表单“离院方式”中自动生成住院天数和术后住院天数
7、所有表单中子表单中的子标题未添加
```
####表单样式方面
```
1、表单项label过长自动换行
2、导航栏
3、进度条
4、回到顶部
```
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
