class BmiCaliculator {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    // BMI算出
    calcBmi() {
        let bmi = this.weight / ((this.height/100)**2);
        return(bmi.toFixed(2));
    }
    
    // 適正体重算出
    standardWeight() {
        let standard = ((this.height * 0.01) ** 2) * 22;
        return(standard.toFixed(2));
    }

    // 最適体重と比較
    compareWeiht() {
        let compare = this.weight - this.standardWeight();
        return(compare.toFixed(2));
    }

    // bmi結果振り分け
    evaluation() {
        let result;
        
        if (this.bmi < 18.5) {
            result = 0; 
        } else if (18.5 <= this.bmi < 25) {
            result = 1;
        } else if (25 <= this.bmi < 30){
            result = 2;
        } else if (30 <= this.bmi < 45){
            result = 3;
        } else if ( this.bmi){
            result = 4;
        } else {
            resultlt = 5;
        }

        return result;
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
    // BMI該当範囲出力
    printRange(result) {
        const range = [
            '18.5未満',
            '18.5~25未満',
            '25~30未満',
            '30~35未満',
            '35~40未満',
            '40以上'
        ]
        return range[result];
    }

    // データ出力
    displayResult() {
        console.log('名前：'+ this.name);
        console.log('身長：' + this.height + 'cm');
        console.log('体重：' + this.weight + 'kg');
        console.log('範囲：' + this.printRange(this.evaluation()));
        console.log('肥満度：'+ this.printFatness(this.evaluation()));
        console.log('適正体重：' + this.standardWeight() + 'kg');
        console.log('適正体重と比較：' + this.compareWeiht() + 'kg');
        console.log('BMI：' + this.calcBmi());
    }
}

let satoBmi = new BmiCaliculator('sato', 190, 1);
satoBmi.displayResult();
