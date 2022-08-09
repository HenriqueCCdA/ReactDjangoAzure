from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from api.models import CustomUser


class CustomUserCreation(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ('email', )


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = ('email', )
