FORMAT: V0.0.1

# APP接口文档

::: warning
#### <i class="fa fa-warning"></i> 注意
1. 本协议中约定所有入参全部封装在param对象中;
2. 本协议中约定所有出参返回类型为application/json类型;
:::

# Group 门店管理

## 商户-门店列表查询 [GET /store/app/search]
> 根据页面查询条件获取门店列表

### 入参参数说明
序号 | 名称 | 长度 | 类型 | 必填 | 备注 | 字典值
----|------|----|------|----|------|----
1 | storeName | | string | 是 | 门店名字 |
2 | enable | | number | 是 | 状态 | 0:启用 1:注销 -1默认查全部

### 出参参数说明
序号 | 名称 | 长度 | 类型 | 必填 | 备注 | 字典值
----|------|----|------|----|------|----
1 | storeName | | string | 是 | 门店名字 |
2 | enable | | number | 是 | 状态 | 0:启用 1:注销 -1默认查全部

+ Parameters
    + storeName: `鼓楼店` (required, string) - 门店名字

+ Response 200 (application/json;charset=UTF-8)
    
    + Body

            {
                "success": true,
                "err_code": "",
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


# Group 员工管理
 
## 员工-员工查询  [POST /user/app/info]
> 根据员工ID查询员工信息

### 入参参数说明
序号 | 名称 | 长度 | 类型 | 必填 | 备注 | 字典值
----|------|----|------|----|------|----
1 | id | | string | 是 | 员工ID |

### 出参参数说明
序号 | 名称 | 长度 | 类型 | 必填 | 备注 | 字典值
----|------|----|------|----|------|----
1 | storeId | | string | 是 | 门店ID |
2 | storeName | | number | 是 | 门店名字 |

+ Request (application/x-www-form-urlencoded)
First POST example with body

    + Schema

        {
            "param": {
                "id": '' // 员工ID
            }
        }
       
+ Response 200 (application/json;charset=UTF-8)
    
    + Body
    
            {
                "success": true,
                "err_code": "",
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
