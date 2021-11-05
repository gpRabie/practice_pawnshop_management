// Copyright (c) 2021, Rabie Moses Santillan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Jewelry Items', {
	refresh: function(frm) {
		fill_item_no();
	}

});

function fill_item_no(frm) {
	frappe.call({
		method: 'frappe.client.get_value',
		args: {
			'doctype': 'Sangla Count',
			'fieldname': [
				'jewelry_inventory_count',
				'jewelry_count'
			]
		},

		callback: function(values) {
			let previous_item_no = values.message;
			let item_no = "";
			console.log(previous_item_no.jewelry_inventory_count);
			if (cur_frm.doc.new_transaction == true) {
				item_no = (parseInt(previous_item_no.jewelry_inventory_count) + 1) + "-" + (parseInt(previous_item_no.jewelry_count) + 1);
				cur_frm.set_value('item_no', item_no)
			} else {
				item_no = parseInt(previous_item_no.jewelry_inventory_count) + "-" + (parseInt(previous_item_no.jewelry_count) + 1);
				cur_frm.set_value('item_no', item_no)
			}
			cur_frm.refresh_fields();
		}
	})
}
