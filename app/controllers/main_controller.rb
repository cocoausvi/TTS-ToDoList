class MainController < ApplicationController

	def index
	end

	def listlog
		name2 = params[:first_name]
		listname2 = params[:list_name] 

		lists = List.new(first_name: name2, list_name: listname2)
		lists.save

		# @lists = List.all

		head :ok

	end

	def itemlog
		item2 = params[:item_name]
		days2 = params[:quantity] 
		# list = params[:list_id]

		items = Item.new(item_name: item2, quantity: days2)
		items.list = @list

		items.save

		head :ok

	end

	def show
		@lists = List.all
	end

end

# copy the correct parameter (key) names from the ajax call
		
# $.ajax({
# 	url: '/main/listlog'
# 	type: 'POST',
# 	data: {first_name: name, list_name: listname}

# copy the correct parameter (key) names from the ajax call
# $.ajax({
# 	url: '/main/itemlog',
# 	type: 'POST',
# 	data: {item_name: item, quantity: days}

# ensure using the correct field names for instantiating (see the migration file / model)
  # def change
  #   create_table :items do |t|
  #     t.string :item_name
  #     t.integer :quantity
  #     t.integer :list_id

  #     t.timestamps
  # end