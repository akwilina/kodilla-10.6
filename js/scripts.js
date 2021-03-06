$(document).ready(function() {
	function randomString() {
		var chars = "0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ";
		var str = "";
		for (var i = 0; i < 10; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}

	function Column(name) {
		var self = this;
		this.id = randomString();
		this.name = name;
		this.$element = createColumn();

		function createColumn() {
			var $column = $("<div>").addClass("column col-4");
			var $columnTitle = $("<h2>").addClass("column-title").text(self.name);
			var $columnCardList = $("<ul>").addClass("column-card-list");
			var $columnDelete = $("<button>").addClass("btn-delete").text("x");
			var $columnAddCard = $("<button>").addClass("add-card").text("Add new card");

			$columnDelete.click(function () {
				self.removeColumn();
			});

			// Add new card after button clicking
			$columnAddCard.click(function () {
				self.addCard(new Card(prompt("Write card name")));
			});

			$column.append($columnTitle)
				.append($columnDelete)
				.append($columnAddCard)
				.append($columnCardList);

			return $column;
		}
	}

	Column.prototype = {
		addCard: function (card) {
			this.$element.children("ul").append(card.$element);
			return this;
		},
		removeColumn: function () {
			this.$element.remove();
		}
	};

	function Card(description) {
		var self = this;
		this.id = randomString();
		this.description = description;

		var $card = $("<li>").addClass("card").attr({title: this.description + " #" + this.id});
		var $cardRow = $("<div>").addClass("row");
		var $cardDescription = $("<p>").addClass("card-description col-10").text(self.description);
		var $cardDelete = $("<button>").addClass("btn-delete col-2").text("x");

		$cardDelete.click(function () {
			self.removeCard();
		});

		$card.append($cardRow);
		$cardRow.append($cardDelete)
			.append($cardDescription);
		this.$element = $card;
	}

	Card.prototype = {
		removeCard: function () {
			this.$element.remove();
		}
	};

	var board = {
		name: "Kanban table",
		addColumn: function (column) {
			this.$element.append(column.$element);
			initSortable();
			return column;
		},
		$element: $("#board .column-container")
	};

	function initSortable() {
		$(".column-card-list").sortable({
			connectWith: ".column-card-list",
			placeholder: "card-placeholder"
		}).disableSelection();
	}

	$(".create-column").click(function () {
		var name = prompt("Enter column name");
		var column = new Column(name);
		board.addColumn(column);
	});

	//creating and adding columns and cards to board
	board.addColumn(new Column("To do")).addCard(new Card("Make world great again"));
	board.addColumn(new Column("Doing")).addCard(new Card("Go to the movies with M."))
		.addCard(new Card("Study JavaScript"));
	board.addColumn(new Column("Done!")).addCard(new Card("Fix sinking roof"));
});