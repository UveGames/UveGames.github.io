
var x= 0
var y= 0

  function act(){
        if(!pause){
            if(pressing[KEY_UP])
                y-=1;
            if(pressing[KEY_RIGHT])
                x+=1;
            if(pressing[KEY_DOWN])
                y+=1;
            if(pressing[KEY_LEFT])
                x-=1;

            if(x>fondo.right)
                x=0;
            if(y>fondo.top)
                y=0;
            if(x<0)
                x=fondo.right;
            if(y<0)
                y=fondo.top;
        }
