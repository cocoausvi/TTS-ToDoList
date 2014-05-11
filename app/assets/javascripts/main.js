$(document).ready(function(){
	$('#submitlist').on('click', function(){
		var name = $('#txtfirstname').val();
		var listname = $('#txtlistname').val();

		$.ajax({
			url: '/main/listlog',
			type: 'POST',
			data: {first_name: name, list_name: listname}
		});
		window.location.replace("http://localhost:3000/main/item")
	});

	$('#submititem').on('click', function(){
		var item = $('#txtitem').val();
		var days = $('#txtqty').val();
		// alert(item)

		$.ajax({
			url: '/main/itemlog',
			type: 'POST',
			data: {item_name: item, quantity: days}
		});
	});

});

// copy the correct IDs from the haml view

// %div#name
// 	%label{:for => "txtfirstname"} What's your first name:
// 	%input{:type => "text", :id => "txtfirstname", :class => "text2"}
// 	-# this is one way to give a id in haml
// %div#list_name
// 	%label{:for => "txtlistname"} Create a name for your To Do List:
// 	%input#txtlistname.text2{:type => "text"}
// 	-# this is another way to give a id in haml, still need to put the type separately
// %br
// %button{:id => "submit"} Submit

// copy the correct IDs from the haml view

// %div#item
// 	%label{:for => "txtitem"} Enter Item:
// 	%input#txtitem1.text2{:type => "text"}
// %div#quantity
// 	%label{:for => "txtqty"} Enter Days to Complete:
// 	%input#txtqty1.text2{:type => "number"}

// copy the correct model field names from the database or model

//   def change
//     create_table :lists do |t|
//       t.string :first_name
//       t.string :list_name

//       t.timestamps
//     end
//   end
// end

// copy the correct model field names from the database or model

  // def change
  //   create_table :items do |t|
  //     t.string :item_name
  //     t.integer :quantity
  //     t.integer :list_id

  //     t.timestamps
  //   end