
var app = new function(){
    this.el = document.getElementById('listitems');
    this.listitems=[];

    this.FetchAll = function() {
        var info ='';

        if (this.listitems.length > 0) {
            for (i = 0; i < this.listitems.length; i++) {
            info += '<tr>';
            info += '<td>'+(i+1)+". " + this.listitems[i] + '</td>';
            info += '<td><button onclick="app.editButton(' + i + ')"  class="btn btn-warning">Edit</button></td>';
            info += '<td><button onclick="app.deleteButton(' + i + ')"  class="btn btn-danger">Delete</button></td>';
            info += '</tr>';
            }
          }

          this.countButton(this.listitems.length);
          return this.el.innerHTML = info 

    };

    this.addButton = function() {

        el = document.getElementById('add-tolist');
        var task = el.value;
        if(task) {
            this.listitems.push(task.trim());
            el.value='';
            this.FetchAll();

        }
        

        
    };

    this.editButton = function(item) {

        el = document.getElementById('edit-todo');
        el.value = this.listitems[item]
        document.getElementById('edit-box').style.display =
        'block';
        self = this;
        document.getElementById('save-edit').onsubmit = function
        () {

            var task = el.value;
            if(task) {
                self.listitems.splice(item,1,task.trim());
                self.FetchAll();
                CloseInput();
            }
        }

        
    };

    this.deleteButton = function(item) {
        this.listitems.splice(item,1)
        this.FetchAll();



    };

    this.countButton = function(data) {
        var el = document.getElementById('counter');
        var name ='Items';
        if(data){
            if(data == 1) {
                name = 'Items';

            }
            el.innerHTML = data+ ' '+name;
        }
        else{
            el.innerHTML ="Zero "+name;
        }

    };

}

    app.FetchAll();

    function ShutDown() {
        document.getElementById('edit-box').style.display = 'none';
    }