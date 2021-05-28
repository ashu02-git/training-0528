class BmiCaliculator {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;

        // BMI算出
        this.bmi = (this.weight / ((this.height/100)**2)).toFixed(2);
        // 適正体重算出
        this.standard = (((this.height * 0.01) ** 2) * 22).toFixed(2);
    }

    // 最適体重と比較
    compareWeight() {
        let compare = this.weight - this.standard;
        return(compare.toFixed(2));
    }

    // bmi結果振り分け
    level() {
        let level;
        const resultBmi = this.bmi;
        if (resultBmi < 18.5) {
            level = 0; 
        } else if (18.5 <= resultBmi && resultBmi < 25) {
            level = 1;
        } else if (25 <= resultBmi && resultBmi < 30){
            level = 2;
        } else if (30 <= resultBmi && resultBmi < 35){
            level = 3;
        } else if (35 <= resultBmi && resultBmi < 40){
            level = 4;
        } else {
            level =5;
        }

        return level;
    }
    
    // 肥満度出力
    printFatness(result) {
        const textFatness = [
            '低体重',
            '普通体重',
            '肥満（1度）',
            '肥満（2度）',
            '肥満（3度）',
            '肥満（4度）'
        ]
        return textFatness[result]
    }

    // データ出力
    displayResult() {
        console.log('名前：'+ this.name);
        console.log('身長：' + this.height + 'cm');
        console.log('体重：' + this.weight + 'kg');
        console.log('肥満度：'+ this.printFatness(this.level()));
        console.log('適正体重：' + this.standard + 'kg');
        console.log('適正体重と比較：' + this.compareWeight() + 'kg');
        console.log('BMI：' + this.bmi);
    }
}

let satoBmi = new BmiCaliculator('sato', 180, 130);
satoBmi.displayResult();