function task1()
{
    let a = prompt("Enter is a number 1: ");
    let b = prompt("Enter is a number 2: ");
    if (a % b == 0)
    {
        alert(+ a + " chia hết cho " + b);
    }
    else
    {
        alert(+ a + " không chia hết cho " + b);
    }
}

function task2()
{
    let age = prompt("Nhập số tuổi: ");
    if (age < 15)
    {
        alert("Bạn chưa đủ tuổi vào lớp 10");
    }
    else
    {
        alert("Bạn đủ tuổi vào lớp 10");
    }
}

function task3()
{
    let integer = prompt("Nhập vào 1 số nguyên bất kỳ: ");

    if (integer > 0)
    {

        alert("Số " + integer + " lớn hơn 0");
    }
    else
    {
        if (integer == 0)
        {
            alert("0 bằng 0");
        }
        else
        {
            alert("Số " + integer + " nhỏ hơn 0");
        }
    }

}

function task4()
{
    let int1 = prompt("Nhập số nguyên thứ 1: ");
    let int2 = prompt("Nhập số nguyên thứ 2: ");
    let int3 = prompt("Nhập số nguyên thứ 3: ");
    if (int1 >= int2)
    {
        if (int1 >= int3)
        {
            alert(int1 + " là số lớn nhất");
        }
        else
        {
            alert(int3 + " là số lớn nhất");
        }
    }
    else
    {
        if (int2 >= int3)
        {
            alert(int2 + " là số lớn nhất");
        }
        else
        {
            alert(int3 + " là số lớn nhất");
        }
    }
}

function task5()
{
    let DKT = Number(prompt("Điểm bài kiểm tra:"));
    let DGK = Number(prompt("Điểm bài kiểm tra giữa kỳ:"));
    let DCK = Number(prompt("Điểm bài kiểm tra cuối kỳ:"));
    let DTB = (DKT + DGK*3 + DCK*6)/10;
    if (DTB < 5)
    {
        alert("Học lực yếu");
    }
    else
    {
        if (DTB < 6.5)
        {
            alert("Học lực trung bình");
        }
        else
        {
            if(DTB < 8)
            {
                alert("Học lực khá");
            }
            else
            {
                alert("Học lực giỏi");
            }
        }
    }
}

function task6()
{
    let sale = Number(prompt("Doanh số bán hàng trong tháng:"));
    let commision;
    if (sale <= 5000000)
    {
        commision = sale*0.05;
    }
    else
    {
        if (sale <= 10000000)
        {
            commision = sale*0.1;
        }
        else
        {
            if (sale <= 20000000)
            {
                commision = sale*0.14;
            }
            else
            {
                if (sale <= 50000000)
                {
                    commision = sale*0.18;
                }
                else
                {
                    commision = sale*0.2;
                }
            }

        }
    }
    alert("Số tiền hoa hồng nhận được là: " + commision + " VND");
}

function task7()
{
    let innerMinute = Number(prompt("Số phút gọi điện thoại nội mạng hàng tháng:"));
    let outnerMinute = Number(prompt("Số phút gọi điện thoại ngoại mạng hàng tháng:"));
    let payBill;
    if (innerMinute < 120 || outnerMinute < 60)
    {
        payBill = innerMinute*1590 + outnerMinute*1790;
    }
    else
    {
        if (innerMinute < 240 || outnerMinute < 120)
        {
            payBill = innerMinute*1390 + outnerMinute*1590;
        }
        else
        {
            if (innerMinute < 480 || outnerMinute < 240)
            {
                payBill = innerMinute*1190 + outnerMinute*1390;
            }
            else
            {
                if (innerMinute < 960 || outnerMinute < 480)
                {
                    payBill = innerMinute*890 + outnerMinute*1290;
                }
                else
                {
                    payBill = innerMinute*690 + outnerMinute*990;
                }

            }
        }
    }
    alert("Số tiền cước phí điện thoại phải trả là " + payBill + " VND");
}