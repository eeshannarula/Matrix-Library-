class Matrix
{
    constructor( rows, cols, initVal )
    {
        this.rows = rows;
        this.cols = cols;
        this.grid = new Array();

        // If an initial value is specified, fill the grid with it
        if( ( initVal && !Number.isNaN(initVal) ) || initVal == 0 )
            this.fill( initVal );
        else
            this.fill(0);
    }
    
    fill(val)
    {
        for(let r = 0; r < this.rows; r++)
        {
            // Each row contains an array of cols items
            this.grid[r] = new Array( this.cols );
            // If a value val is given and it is a number, fill the matrix with it
            if( ( val && !Number.isNaN(val) ) || val == 0 )
                this.grid[r].fill( val );
            // Else, fill it with a repeating random number [0, 9]
            else
                this.grid[r].fill( Math.floor( Math.random() * 10 ) );
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
    static Copy(x)
    {
        var result=new Matrix(x.rows,x.cols)
        return result
    }
    
    static VectorToMatrix(x)
    {
        var result=new Matrix(x.length,1)
        for(var i=0;i<result.rows;i++)
        {
            for(var j=0;j<result.cols;j++)
            {
                result.grid[i][j]=x[i]
            }
        }
        
        return result;
    }
    
    // Row operations methods
    
    switchRows(a, b)
    {
        // If both rows exist
        if( this.grid[a] && this.grid[b] )
        {
           let tempRow = this.grid[a];
            this.grid[a] = b;
            this.grid[b] = tempRow;
        }
        else
            throw "One or both of the rows don't exist";
    }
    
    multiplyRow(row, n)
    {
        if( !Number.isNaN(n) && n != 0 )
        {
            for( let k = 0; k < this.grid[row].length; k ++ )
                this.grid[row][k] *= n;
        }
        else
            throw "Constant must be a number different of zero";
    }
    
    addRows(a, b)
    {
        // If both rows exist
        if( this.grid[a] && this.grid[b] )
        {
            for( let c = 0; c < this.grid[b].length; c++ )
                this.grid[b][c] += this.grid[a][c];
        }
        else
            throw "One or both of the rows don't exist";
    }
       
}
