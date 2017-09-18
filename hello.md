# APP接口文档

::: warning
#### <i class="fa fa-warning"></i> Caution
本接口协议中约定所有入参全部封装在param对象中
:::

序号 | 名称 | 长度 | 类型 | 必填 | 备注 | 字典值
----|------|----|------|----|------|----
1 | storeName | | string | 是 | 门店名字 |
2 | enable | | number | 是 | 状态 | 0:启用 1:注销 -1默认查全部

# Group 门店管理

## 商户-门店列表查询  [GET /store/app/search{?storeName,enable,pageNO,pageCount}]

+ Request (application/json)

        {
            "content": {
                "storeName": '', // 门店名字
                "enable": '', // 状态
            }
        }

+ Parameters
    + storeName (string,required) - 门店名字,字符串
    + enable (numberl ,optional) - 状态,整型  0:启用,1:注销 -1默认查全部
    + pageNO (numberl,required) - 页码, 整型 第一页默认 1 必填
    + pageCount (numberl,required) - 每页显示条数, 整型  必填
       
+ Response 201 (application/json)
    + Body

            {
                "success": true,
                "err_code": "888888",
                "err_msg": "错误说明",
                "data": {
                    "storeSearchDto": [
                                       {
                                           "id": 2, 
                                           "storeName": "屠神", 
                                           "mobilePhone": "10000002",
                                           "enable": 0,
                                           "storeNo": "001",
                                           "storeLogo":"标志地址"
                                       }
                                       ],
                    "page": {
                        "pageNO": 1,
                        "everyPageCount": 10,
                        "totalCount": 1
                    }
                }
            }
            
    + Schema

            {
               "data": {
                    "storeSearchDto": [
                                       {
                                           "id": "员工id，字符串", 
                                           "storeName": "门店名字，字符串", 
                                           "mobilePhone": "手机号码，字符串",
                                           "enable": "启用状态，整形，0：启用；1：禁用",
                                           "storeNo": "门店编号，字符串",
                                           "storeLogo":"门店图片，字符串"
                                       }
                                       ],
                    "page": {
                        "pageNO": 1,
                        "everyPageCount": 10,
                        "totalCount": 1
                    }
            }

## 商户-获取门店名称列表接口  [GET /user/app/search-store-name]
       
+ Response 200 (application/json)

    + Body

            {
                "success": true,
                "err_code": "888888",
                "err_msg": "错误说明",
                "data": {
                    "storeNameDto": [
                                     {
                                         "storeId": 2,
                                         "storeName": "屠神"
                                     }
                                     ]
                }
            }
        
      
        
# Group 员工管理   
 
## 商户-门店列表查询  [POST /user/app/info{?id}]

+ Parameters

    + id (string,optional) - 员工ID
       
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
            
    + Schema

            {
                "data": {
                        "id": "员工id,整型",
                         "storeId": "门店ID，字符串",
                        "storeName": "门店名字",
                        "realname": "员工姓名，字符串",
                        "mobilePhone": "手机号，字符串",
                        "sex": "性别，0：男  1：女",
                        "enable": "启用状态，0：启用；1：禁用",
                        "username": "账号，字符串",
                        "portrait": "头像链接，字符串"
                        }
            }
    
## 门店-修改员工密码  [POST /user/app/store-edit-password{?id,password}]

+ Parameters

    + id (string) - 员工ID
    + password (string) - 账户密码
       
+ Response 200 (application/json)

    + Body

            {
                "success": true,
                "err_code": "888888",
                "err_msg": "错误说明"
            }        
            
# Group 意见反馈   
 
## 商户/店长/员工 -意见反馈  [POST /advice/app/customer-advice{?content,title}]

+ Parameters

    + content (string,required) - 意见反馈内容
    + title (string,optional) - 联系方式
       
+ Response 200 (application/json)

    + Body

            {
                "success": true,
                "err_code": "888888",
                "err_msg": "错误说明"
            }


