from django.contrib import admin

from django.contrib.auth.admin import UserAdmin

from api.forms import CustomUserChangeForm, CustomUserCreation
from api.models import CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreation
    form = CustomUserChangeForm
    model = CustomUser

    list_display = ('name', 'email', 'is_staff', 'is_active', 'date_joined', 'sent_verification_email', 'verifeid_email')
    list_filter = ('name', 'email', 'is_staff', 'is_active', 'date_joined', 'sent_verification_email', 'verifeid_email')

    fieldsets = (
        (None, {'fields': ('name', 'email', 'password', 'date_joined', 'sent_verification_email', 'verifeid_email')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')
        })
    )

    search_fields = ('email', )
    ordering = ('email', )

admin.site.register(CustomUser, CustomUserAdmin)