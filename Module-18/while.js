// showing while loop repeat until conditon false
var numbers = 0;
while(numbers <10){
    console.log('loop repeat continuous')
    console.log(numbers)
    // numbers++;
    // numbers = numbers+1;
    numbers += 1;
}
// কোন কাজ বারবার করার জন্য ‍লুপ প্রয়োজন। এর সুবিধা হলো কনসোল বারবার লিখতে হচ্ছেনা। কনসোল লিখেছি একবার কিন্তু numbers <10 শর্তটি যতক্ষণ মিথ্যা হচ্ছেনা ততক্ষণ রিপিট করতে থাকবে। thats it. কিন্তু লুপ কন্ডিশন value অবশ্যই পরিবর্তন করতে হবে। না হয় লুপ আজীবন চলতে থাকবে। যেমন numbers++; or numbers = numbers+1; or numbers += 1; দিয়ে variable er value  ১ করে করে ১০ এর আগপর্যন্ত বাড়বে। আর চলবে না।
// ***উল্লেখ্য যে,**** variable name "numbers++", "numbers = numbers+1;", "numbers +=1;" তিনটা body-ই একই কাজ করে। অর্থাৎ ০ এর সাথে ১ ১ করে বাড়বে।
 