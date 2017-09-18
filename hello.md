# APP接口文档

::: warning
#### <i class="fa fa-warning"></i> Caution
1. 本接口协议中约定所有入参全部封装在param对象中;
:::

# Group 门店管理

## 商户-门店列表查询 [GET /store/app/search]

+ Request

        {
            "param": {
                "storeName": '', // 门店名字
                "enable": '', // 状态
            }
        }
+

### 入参参数说明
序号 | 名称 | 长度 | 类型 | 必填 | 备注 | 字典值
----|------|----|------|----|------|----
1 | storeName | | string | 是 | 门店名字 |
2 | enable | | number | 是 | 状态 | 0:启用 1:注销 -1默认查全部

+ Response 200 (application/json)
    + Body

            {
                "success": true,
                "err_code": "888888",
                "err_msg": "错误说明",
                "data": {
                    "storeSearchDto": [{
                        "id": 2,
                        "storeName": "屠神",
                        "mobilePhone": "10000002",
                        "enable": 0,
                        "storeNo": "001",
                        "storeLogo": "标志地址"
                    }],
                    "page": {
                        "pageNO": 1,
                        "everyPageCount": 10,
                        "totalCount": 1
                    }
                }
            }
+

### 出参参数说明
序号 | 名称 | 长度 | 类型 | 必填 | 备注 | 字典值
----|------|----|------|----|------|----
1 | storeName | | string | 是 | 门店名字 |
2 | enable | | number | 是 | 状态 | 0:启用 1:注销 -1默认查全部
        
# Group 员工管理   
 
## 商户-门店列表查询  [POST /user/app/info]

+ Request

        {
            "param": {
                "id": '' // 员工ID
            }
        }
+

### 入参参数说明
序号 | 名称 | 长度 | 类型 | 必填 | 备注 | 字典值
----|------|----|------|----|------|----
1 | id | | string | 是 | 员工ID |
       
+ Response 200 (application/json)
    + Body

            {
                "success": true,
                "err_code": "888888",
                "err_msg": "错误说明",
                "data":{
                    "id": 39,
                    "storeId":43,
                    "realname": "屠神", 
                    "mobilePhone": "13554477744",
                    "storeName": "杭州店",
                    "type":0,
                    "sex": 1,
                    "enable": 1,
                    "username": "chenlong01",
                    "portrait":"头像"
                }
            }
+

### 出参参数说明
序号 | 名称 | 长度 | 类型 | 必填 | 备注 | 字典值
----|------|----|------|----|------|----
1 | storeId | | string | 是 | 门店ID |
2 | storeName | | number | 是 | 门店名字 |
