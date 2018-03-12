
/*
hey ! i am trying to make an open source matrix library.you can contribute to this library.

existing functions are 

1.add,sub,div,and mult scaler number to matrix 
2.add,dub,mult,div one matrix with other 
3.dot produnct || matrix produnt
4.transpose matrix(rows to cols , cols to rows) 

*/



class Matrix
{
    constructor(x,y)
    {
    this.rows=x;
    this.cols=y;
    this.grid=[];
    
    for(var i=0;i<this.rows;i++)
    {
        this.grid[i]=[];
        for(var j=0;j<this.cols;j++)
        {
            this.grid[i][j]=0
        }
    }
    
    }
    
    
    Randomize()
    {
        for(var i=0;i<this.rows;i++)
    {
        for(var j=0;j<this.cols;j++)
        {
    this.grid[i][j]=Math.floor(Math.random()*10);
        }
    }
    }
    
     Mult(x)
    {
    if(x instanceof Matrix){
        
        if(this.rows==x.rows && this.cols==x.cols)
       {
       for(var i=0;i<this.rows;i++)
         {
        for(var j=0;j<this.cols;j++)
          {
            this.grid[i][j]*=x.grid[i][j]
          }
         }
       }
    }else{
        for(var i=0;i<this.rows;i++)
    {
        for(var j=0;j<this.cols;j++)
        {
            this.grid[i][j]*=x
        }
    }
    }
    }
    
    Add(x)
    {
    if(x instanceof Matrix){
        
        if(this.rows==x.rows && this.cols==x.cols)
       {
       for(var i=0;i<this.rows;i++)
         {
        for(var j=0;j<this.cols;j++)
          {
            this.grid[i][j]+=x.grid[i][j]
          }
         }
       }
    }else{
        for(var i=0;i<this.rows;i++)
    {
        for(var j=0;j<this.cols;j++)
        {
            this.grid[i][j]+=x
        }
    }
    }
    }
    
    Sub(x)
    {
    if(x instanceof Matrix){
        
        if(this.rows==x.rows && this.cols==x.cols)
       {
       for(var i=0;i<this.rows;i++)
         {
        for(var j=0;j<this.cols;j++)
          {
            this.grid[i][j]-=x.grid[i][j]
          }
         }
       }
    }else{
        for(var i=0;i<this.rows;i++)
    {
        for(var j=0;j<this.cols;j++)
        {
            this.grid[i][j]-=x
        }
    }
    }
    }
    
    div(x)
    {
    if(x instanceof Matrix){
        
        if(this.rows==x.rows && this.cols==x.cols)
       {
       for(var i=0;i<this.rows;i++)
         {
        for(var j=0;j<this.cols;j++)
          {
            this.grid[i][j]/=x.grid[i][j]
          }
         }
       }
    }else{
        for(var i=0;i<this.rows;i++)
    {
        for(var j=0;j<this.cols;j++)
        {
            this.grid[i][j]/=x
        }
    }
    }
    }
    
    Map(func,row,col)
    {
     if(row && col){
         for(var i=0;i<this.rows;i++)
    {
        for(var j=0;j<this.cols;j++)
        {
            var val=this.grid[i][j];
            if(i==row && j==col)
            {
            this.grid[i][j]=func(val);
            }      
        }
    }
     }else{
        for(var i=0;i<this.rows;i++)
    {
        for(var j=0;j<this.cols;j++)
        {
            var val=this.grid[i][j];
            this.grid[i][j]=func(val);
        }
    }
    }
    }
    
    Print(subject)
    {
    if(subject)
    {
        console.table(subject+":"+this.grid);
    }
    else
    {
        console.table(this.grid)
    }
    }
    
    static Product(m,n)
    {
    if(n.rows==m.cols)
       {
       var result=new Matrix(n.rows,m.cols)
       for(var i=0;i<result.rows;i++)
         {
        for(var j=0;j<result.cols;j++)
          {
            var sum=0;
            for(var k=0;k<n.cols;k++)
            {
            
        sum+=n.grid[i][k]*m.grid[k][j];
            }
            
            result.grid[i][j]=sum;
          }
         }
         return result;
       }
       else
       {
    console.log("Rows of A must be == Cols of B");
    return undefined;
       }
    }
    
    static Transpose(a)
    {
        var result=new Matrix(a.cols,a.rows);
        for(var i=0;i<result.rows;i++)
     {
        for(var j=0;j<result.cols;j++)
        {
            result.grid[i][j]=a.grid[j][i];
        }
     }
     return result;
    }

    
}
 






/*TESTING PERPOSIS ONLY  :-)

var m1=new Matrix(3,2);
var m2=new Matrix(3,2);
m1.print();
m1.Randomize();
m2.Randomize();
m1.Print("m1");
m2.Print("m2");

m2=Matrix.Transpose(m2);
m2.Print("transposed m2");

var m3=Matrix.Product(m1,m2);
m2.Mult(m1)
m2.Print("m2 multiplied")
m3.Print("matrix product of m1 and m2--");


//function doubleIt(x){return x*2};
//m1.Map(doubleIt);
//m1.print();
//m1.Map(doubleIt,0,0);
//m1.Print();


*/
