# Copyright (c) 2021, Rabie Moses Santillan and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Sangla(Document):
    def before_save(self):
        count = frappe.get_doc('Sangla Count')
        if self.item_series == 'A':
            count.a_series_current_count += 1
            # frappe.client.set_value('Sangla Count', 'Sangla Count', 'a_series_current_count', count.a_series_current_count + 1, ignore_permissions=True)
        else:
            count.b_series_current_count += 1
            # frappe.client.set_value('Sangla Count', 'Sangla Count', 'b_series_current_count', count.b_series_current_count + 1, ignore_permissions=True)
        count.insert(ignore_permissions=True)
        count.save()

