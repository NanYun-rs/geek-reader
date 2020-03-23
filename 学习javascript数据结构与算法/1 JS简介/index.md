#### 相等运算符 == ===


##### == 运算

| 类型             |    类型     |                                   结果 |
| ---------------- | :---------: | -------------------------------------: |
| `nulll`          | `undefined` |                               ` true ` |
| `number `        |  ` string`  |           `number== toNumber(string) ` |
| `boolean`        |  `  any `   |           ` toNumber(boolean) == any ` |
| `string/number ` |  `object `  | `string/number = toPrimitive(object) ` |

- toNumber

| 值类型      |                    结果 |
| ----------- | ----------------------: |
| `undefined` |                  `NaN ` |
| `null  `    |                   `  0` |
| `boolean `  | ` true - 1 false - 0  ` |
| `number `   |             `对应的值 ` |


- toPrimitive

| 值类型   |                                                                           结果 |
| -------- | -----------------------------------------------------------------------------: |
| `object` | `valueOf toString 方法返回值 说明 valueOf 权重比较高同时出现优先使用 valueOf ` |


