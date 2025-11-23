# 登录mysql

```shell
mysql -u root -p
```

# 重启mysql 服务

```shell
brew services restart mysql
# 或者
sudo service mysql restart
```

# 切换数据库

```sql
USE `your_database_name`;
```

# 查看user表的数据

```sql
SELECT * FRPOM `user`;
```
# 创建数据库
使用 utf8mb4 避免 emoji / 多语言字符乱码。
COLLATE utf8mb4_unicode_ci 常用，大小写不敏感。

```sql
CREATE DATABASE `your_database_name` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

# 删除数据库

```sql
DROP DATABASE IF EXISTS your_database_name;
```
# 查看所有数据库

```sql
SHOW DATABASES;
```

