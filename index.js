// // console.log('ma4ee....');
// const shape = [4,2];
// const data = tf.tensor([4,6,5,9, 13,25,1,57], shape);
//
// // variables with zeros method
//
// const data2 = tf.variable(tf.zeros([8]));
//
//
//
//
// data2.print();
//
// data2.assign(tf.tensor1d([4 ,12 ,5 ,6 ,56 ,3 ,45 ,3]))
// data2.print();
//
// const data3 = tf.tensor1d([4,6,5,9]);
//
// const data4 = tf.tensor1d([5,4,23,45]);
//
//
// data3.print();
//
// data4.print();
//
//
// // n4of el add wel mul
//
// data3.add(data4).print();
//
// data3.mul(data4).print();


//-----------------------------------------------------------------------------
// --------------------- Model ---------------------------------------------
function simpleAdd(input1, input2) {


    // tidy de used to free up GPU memory lma y5ls

    return tf.tidy(() => {
        const x1 = input1;
        const x2 = input2;
        const y = x1.add(x2);
        return y;
    });
}


const data1 = tf.tensor1d([4, 6, 5, 9]);
const data2 = tf.tensor1d([5, 4, 34, 21]);

// using the model to do input to output
const result = simpleAdd(data1,data2);
//printing result
result.print();
