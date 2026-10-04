import subprocess

def run_command(request):
    cmd = request.GET.get('cmd')
    subprocess.call(cmd, shell=True)
