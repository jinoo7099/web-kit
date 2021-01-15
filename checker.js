// 1. Run을 통하여 Compile 및 시작지점 버그 확인
// 2. Debug Tab을 이용하여 Line 및 Unit 단위로 Run 하며 인자들의 값 조사
// 3. 조사식을 통하여 현재 사용되는 변수의 상태 확인
// 4. Debug Console을 이용하여 순간적인 함수 값 계산
// 5. 원하지 않는 값 발견시 해당 부분을 맞는 값으로 처리
var _ = require("lodash");

class Checker {
    constructor(msg) {
        this.msg = msg;
    }

    bindMembers(names) {
        const context = this;

        return function (ourStudents) {
            return new Promise(resolve => {
                //반드시 10밀리세컨드 지연실행되어야만 함
                setTimeout(function () {
                    const bMember = includeMembers(names, ourStudents);
                    bMember ? resolve(context.msg["ok"].msg) : resolve(context.msg["fail"].msg);
                }, 10);
            });
        };
    }
}

//lodash의 every 메서드를 활용해서 구현
const includeMembers = function (names, ourStudents) {
    return _.every(names, (a) => ourStudents.includes(a));
};

const runner = function (generator, names, ourStudents) {
    const gener = generator(names, ourStudents);
    gener.next();
};

module.exports = { Checker, runner };
